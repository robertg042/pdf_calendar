import dayjs from 'dayjs';
import i18n from 'i18n';
import { Grid, GridCellCallbackParams } from '../components/Grid';
import { Text } from '../components/Text';
import { DAY_NAMES, MONTH_NAMES, shared } from '../constants/common';
import { YEAR } from '../constants/config';
import { CONTENT_HEIGHT, CONTENT_WIDTH, MARGINS, PAGE_HEIGHT } from '../constants/page';
import { COLORS, FONT_SIZES } from '../constants/theme';
import { getAnchorId } from '../domain/navigation';
import { Page } from './Page';

export class MonthPage extends Page {
	doc: PDFKit.PDFDocument;
	date: dayjs.Dayjs;
	outline: PDFKit.PDFOutline;
	headerY: number;
	headerBottomMargin: number;
	dayNameBarY: number;
	monthCalendarY: number;
	dayNameBarHeight: number;

	constructor(doc: PDFKit.PDFDocument, date: dayjs.Dayjs, outline: PDFKit.PDFOutline) {
		super(doc);

		this.doc = doc;
		this.date = date;
		this.outline = outline;

		this.headerY = 0;
		this.headerBottomMargin = 40;
		this.dayNameBarY = 0;
		this.monthCalendarY = 0;

		this.dayNameBarHeight = 50;

		this.addDayNames = this.addDayNames.bind(this);
		this.addDayGrid = this.addDayGrid.bind(this);
		this.addDaysLabels = this.addDaysLabels.bind(this);
	}

	add() {
		super.add();
		this.addHeader();
		this.addMonthCalendar();

		const monthIndex = this.date.month();
		const monthName = i18n.__(`months.full.${MONTH_NAMES[monthIndex]}`);

		this.outline.addItem(monthName);

		const anchorId = getAnchorId('month', monthIndex);
		anchorId && super.addAnchor(anchorId);

		Text.reset();
	}

	private addHeader() {
		Text.reset();

		const monthIndex = this.date.month();
		const monthName = i18n.__(`months.full.${MONTH_NAMES[monthIndex]}`) + ' ';
		const headerText = `${monthName}${YEAR}`;

		this.doc.fillColor(COLORS.black).fontSize(FONT_SIZES.header);
		const monthNameWidth = this.doc.widthOfString(monthName);
		const headerTextWidth = this.doc.widthOfString(headerText);

		const textHeight = this.doc.heightOfString(headerText);

		const { x: textX, y: textY } = Text.getCenteredPos(
			headerText,
			MARGINS.left,
			MARGINS.top,
			CONTENT_WIDTH,
			textHeight
		);

		this.doc.text(monthName, textX, textY);
		const goToId = getAnchorId('calendar');
		this.doc.text(String(YEAR), textX + monthNameWidth, textY, {
			goTo: goToId,
		});
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(1)
			.moveTo(textX + monthNameWidth, textY + textHeight - 5)
			.lineTo(textX + headerTextWidth, textY + textHeight - 5)
			.stroke();

		const LINE_HEIGHT = 3;
		const LINE_TOP_MARGIN = 10;
		const lineX = MARGINS.left;
		const lineY = textY + textHeight + LINE_TOP_MARGIN;

		shared.dayPageHeaderHeight = textHeight + LINE_TOP_MARGIN;
		this.headerY = lineY;

		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(lineX, lineY)
			.lineTo(lineX + CONTENT_WIDTH, lineY)
			.stroke();

		Text.reset();
	}

	private addMonthCalendar() {
		const DAYS_IN_WEEK = 7;
		const COLUMN_COUNT = DAYS_IN_WEEK;
		const DAY_NAME_BAR_ROW_COUNT = 1;

		const spaceAbove = this.headerY + this.headerBottomMargin;
		const spaceSide = MARGINS.left;
		const width = CONTENT_WIDTH;

		this.dayNameBarY = this.headerY + this.headerBottomMargin + this.dayNameBarHeight;
		const DAY_GRID_ROW_COUNT = this.getGridRowCount();

		// add day numbers
		Grid.add(
			spaceSide,
			this.dayNameBarY,
			width,
			0.6 * CONTENT_HEIGHT,
			this.addDaysLabels,
			DAY_GRID_ROW_COUNT,
			COLUMN_COUNT
		);

		// add day grid
		Grid.add(
			spaceSide,
			this.dayNameBarY,
			width,
			0.6 * CONTENT_HEIGHT,
			this.addDayGrid,
			DAY_GRID_ROW_COUNT,
			COLUMN_COUNT
		);

		// add day name bar
		Grid.add(
			spaceSide,
			spaceAbove,
			width,
			this.dayNameBarHeight,
			this.addDayNames,
			DAY_NAME_BAR_ROW_COUNT,
			COLUMN_COUNT
		);

		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(3)
			.moveTo(spaceSide, this.dayNameBarY)
			.lineTo(spaceSide + width, this.dayNameBarY)
			.stroke();
	}

	private getGridRowCount() {
		const DAYS_IN_WEEK = 7;
		const monthIndex = this.date.month();
		const date = dayjs(`${YEAR}-${MONTH_NAMES[monthIndex].toUpperCase()}-01`, 'YYYY-MMMM-DD');
		const dayCount = date.daysInMonth();
		const startingDayOfWeek = date.isoWeekday();
		const rowCount = Math.ceil((startingDayOfWeek - 1 + dayCount) / DAYS_IN_WEEK);

		return rowCount;
	}

	private addDayNames({ x, y, cellWidth, cellHeight, cellIndex }: GridCellCallbackParams) {
		Text.reset();

		const LINE_WIDTH = 1;

		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_WIDTH)
			.moveTo(x, y)
			.lineTo(x, y + cellHeight)
			.stroke();
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_WIDTH)
			.moveTo(x + cellWidth, y)
			.lineTo(x + cellWidth, y + cellHeight)
			.stroke();

		let text = i18n.__(`days.full.${DAY_NAMES[cellIndex]}`);
		const stringWidth = this.doc.widthOfString(text);
		if (stringWidth > 0.9 * cellWidth) {
			text = i18n.__(`days.short.${DAY_NAMES[cellIndex]}`);
		}
		this.doc.fontSize(FONT_SIZES.monthPage.dayName).fillColor(COLORS.grayDark2);
		const { x: textX, y: textY } = Text.getCenteredPos(String(text), x, y, cellWidth, cellHeight, true);
		this.doc.text(text, textX, textY);

		Text.reset();
	}

	private addDayGrid({ x, y, cellWidth, cellHeight, cellIndex }: GridCellCallbackParams) {
		this.doc.strokeColor(COLORS.grayDark3);
		this.doc.rect(x, y, cellWidth, cellHeight).stroke();
	}

	private addDaysLabels({ x, y, cellWidth, cellHeight, cellIndex }: GridCellCallbackParams) {
		const LABEL_SIZE = 50;
		const monthIndex = this.date.month();
		const date = dayjs(`${YEAR}-${MONTH_NAMES[monthIndex].toUpperCase()}-01`, 'YYYY-MMMM-DD');
		const dayCount = date.daysInMonth();
		const startingDayOfWeek = date.isoWeekday();

		const startingIndex = startingDayOfWeek - 1;
		const endingIndex = startingIndex + dayCount;
		if (cellIndex < startingIndex || cellIndex >= endingIndex) return;

		// label rect
		this.doc.strokeColor(COLORS.grayLight3).lineWidth(1);
		this.doc.rect(x, y, LABEL_SIZE, LABEL_SIZE).stroke();

		// label text
		const dayIndex = cellIndex - startingIndex + 1;
		this.doc.fontSize(FONT_SIZES.monthPage.dayNumber).fillColor(COLORS.grayDark2);
		const { x: textX, y: textY } = Text.getCenteredPos(String(dayIndex), x, y, LABEL_SIZE, LABEL_SIZE, true);
		this.doc.text(String(dayIndex), textX, textY);

		const goToId = getAnchorId('day', monthIndex, dayIndex);
		goToId && this.doc.goTo(x, y, LABEL_SIZE, LABEL_SIZE, goToId, {});
	}
}
