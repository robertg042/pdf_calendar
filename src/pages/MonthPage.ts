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
	monthCalendarBottomMargin: number;
	monthCalendarY: number;
	dayNameBarHeight: number;
	notesHeaderHeight: number;
	labelSize: number;
	healthBarHeight: number;
	healthBarCellCount: number;

	constructor(doc: PDFKit.PDFDocument, date: dayjs.Dayjs, outline: PDFKit.PDFOutline) {
		super(doc);

		this.doc = doc;
		this.date = date;
		this.outline = outline;

		this.headerY = 0;
		this.headerBottomMargin = 40;
		this.dayNameBarY = 0;
		this.monthCalendarBottomMargin = 40;
		this.monthCalendarY = 0;

		this.dayNameBarHeight = 50;
		this.notesHeaderHeight = 50;
		this.labelSize = 50;
		this.healthBarHeight = 20;
		this.healthBarCellCount = 5;

		this.addDayNames = this.addDayNames.bind(this);
		this.addDayGrid = this.addDayGrid.bind(this);
		this.addDaysLabels = this.addDaysLabels.bind(this);
		this.drawLine = this.drawLine.bind(this);
		this.healthBar = this.healthBar.bind(this);
	}

	add() {
		super.add();
		this.addHeader();
		this.addMonthCalendar();
		this.addNotesSection();

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
		Text.reset();

		const DAYS_IN_WEEK = 7;
		const COLUMN_COUNT = DAYS_IN_WEEK;
		const DAY_NAME_BAR_ROW_COUNT = 1;

		const spaceAbove = this.headerY + this.headerBottomMargin;
		const spaceSide = MARGINS.left;
		const width = CONTENT_WIDTH;

		this.dayNameBarY = this.headerY + this.headerBottomMargin + this.dayNameBarHeight;
		const DAY_GRID_ROW_COUNT = this.getGridRowCount();
		const DAY_GRID_HEIGHT = 0.6 * CONTENT_HEIGHT;

		// add day numbers
		Grid.add(spaceSide, this.dayNameBarY, width, DAY_GRID_HEIGHT, this.addDaysLabels, DAY_GRID_ROW_COUNT, COLUMN_COUNT);

		// add day grid
		Grid.add(spaceSide, this.dayNameBarY, width, DAY_GRID_HEIGHT, this.addDayGrid, DAY_GRID_ROW_COUNT, COLUMN_COUNT);

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

		this.monthCalendarY = this.dayNameBarY + DAY_GRID_HEIGHT;

		Text.reset();
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
			.moveTo(x, y + 0.75 * cellHeight)
			.lineTo(x, y + cellHeight)
			.stroke();
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_WIDTH)
			.moveTo(x + cellWidth, y + 0.75 * cellHeight)
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
		Text.reset();

		this.doc.strokeColor(COLORS.grayDark3);
		this.doc.rect(x, y, cellWidth, cellHeight).stroke();

		Text.reset();
	}

	private addDaysLabels({ x, y, cellWidth, cellHeight, cellIndex }: GridCellCallbackParams) {
		Text.reset();

		const monthIndex = this.date.month();
		const date = dayjs(`${YEAR}-${MONTH_NAMES[monthIndex].toUpperCase()}-01`, 'YYYY-MMMM-DD');
		const dayCount = date.daysInMonth();
		const startingDayOfWeek = date.isoWeekday();

		const startingIndex = startingDayOfWeek - 1;
		const endingIndex = startingIndex + dayCount;
		if (cellIndex < startingIndex || cellIndex >= endingIndex) return;

		// add day health bars
		Grid.add(x + this.labelSize, y, cellWidth - this.labelSize, this.healthBarHeight, this.healthBar, 1, this.healthBarCellCount);

		// label rect
		this.doc.strokeColor(COLORS.grayLight3).lineWidth(1);
		this.doc.rect(x, y, this.labelSize, this.labelSize).stroke();

		// label text
		const dayIndex = cellIndex - startingIndex + 1;
		this.doc.fontSize(FONT_SIZES.monthPage.dayNumber).fillColor(COLORS.grayDark2);
		const { x: textX, y: textY } = Text.getCenteredPos(String(dayIndex), x, y, this.labelSize, this.labelSize, true);
		this.doc.text(String(dayIndex), textX, textY);

		const goToId = getAnchorId('day', monthIndex, dayIndex);
		goToId && this.doc.goTo(x, y, this.labelSize, this.labelSize, goToId, {});

		Text.reset();
	}

	private healthBar({ x, y, cellWidth, cellHeight, cellIndex, cellCount }: GridCellCallbackParams) {
		Text.reset();

		this.doc.strokeColor(COLORS.grayDark3).lineWidth(1);
		this.doc.rect(x, y, cellWidth, cellHeight).stroke();

		if (cellIndex > 0) {

			this.doc
				.strokeColor(COLORS.grayLight3)
				.moveTo(x, y)
				.lineTo(x, y + cellHeight)
				.stroke();
		}

		Text.reset();
	}

	private addNotesSection() {
		Text.reset();

		const spaceAbove = this.monthCalendarY + this.monthCalendarBottomMargin;
		const spaceSide = MARGINS.left;
		const width = CONTENT_WIDTH;
		const height = this.notesHeaderHeight;

		// header
		const headerText = i18n.__(`pages.monthPage.notes`);
		this.doc.fontSize(FONT_SIZES.monthPage.dayNumber).fillColor(COLORS.grayDark2);
		const { x: textX, y: textY } = Text.getCenteredPos(
			headerText,
			spaceSide,
			spaceAbove,
			width,
			this.notesHeaderHeight,
			true
		);
		this.doc.text(String(headerText), textX, textY);

		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(3)
			.moveTo(spaceSide, spaceAbove + height)
			.lineTo(spaceSide + width, spaceAbove + height)
			.stroke();

		this.addSectionLines(spaceAbove + this.notesHeaderHeight);

		Text.reset();
	}

	addSectionLines(spaceAbove: number) {
		Text.reset();

		const spaceSide = MARGINS.left;
		const spaceBelow = MARGINS.bottom;
		const width = CONTENT_WIDTH;
		const height = PAGE_HEIGHT - spaceAbove - spaceBelow;
		const COLUMN_COUNT = 1;
		const ROW_COUNT = 7;

		Grid.add(spaceSide, spaceAbove, width, height, this.drawLine, ROW_COUNT, COLUMN_COUNT);

		Text.reset();
	}

	private drawLine({ x, y, cellWidth, cellHeight }: GridCellCallbackParams) {
		const LINE_HEIGHT = 1;

		this.doc
			.strokeColor(COLORS.grayDark3)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(x, y + cellHeight)
			.lineTo(x + cellWidth, y + cellHeight)
			.stroke();
	}
}
