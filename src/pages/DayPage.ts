import dayjs from 'dayjs';
import i18n from 'i18n';
import { Grid, GridCellCallbackParams } from '../components/Grid';
import { Text } from '../components/Text';
import { MONTH_NAMES, shared } from '../constants/common';
import { YEAR } from '../constants/config';
import { CONTENT_WIDTH, MARGINS, PAGE_HEIGHT } from '../constants/page';
import { COLORS, FONT_SIZES } from '../constants/theme';
import { getAnchorId } from '../domain/navigation';
import { DayPageType } from '../types/page';
import { Page } from './Page';

export class DayPage extends Page {
	doc: PDFKit.PDFDocument;
	date: dayjs.Dayjs;
	type: DayPageType;
	outline: PDFKit.PDFOutline;
	headerY: number;
	section1Y: number;

	constructor(doc: PDFKit.PDFDocument, date: dayjs.Dayjs, outline: PDFKit.PDFOutline, type: DayPageType) {
		super(doc);

		this.doc = doc;
		this.date = date;
		this.outline = outline;
		this.type = type;

		this.headerY = 0;
		this.section1Y = 0;

		this.drawLine = this.drawLine.bind(this);
		this.addHour = this.addHour.bind(this);
	}

	add() {
		super.add();
		this.addHeader();

		this.addLink();

		const section1Header = i18n.__(`pages.dayPage.${this.type}`);

		this.addSection(MARGINS.left, this.section1Y, CONTENT_WIDTH, section1Header);

		const dayIndex = this.date.date();
		const monthIndex = this.date.month();
		const monthName = i18n.__(`months.full.${MONTH_NAMES[monthIndex]}`);

		if (dayIndex === 1 && this.type === 'schedule') {
			this.outline.addItem(monthName);
		}

		let anchorId = getAnchorId('day', monthIndex, dayIndex);
		if (this.type === 'schedule') {
			anchorId && super.addAnchor(anchorId);
			anchorId = getAnchorId('daySchedule', monthIndex, dayIndex);
		} else if (this.type === 'notes') {
			anchorId = getAnchorId('dayNotes', monthIndex, dayIndex);
		}
		anchorId && super.addAnchor(anchorId);

		Text.reset();
	}

	private addHeader() {
		Text.reset();

		const dayIndex = this.date.date();
		const monthIndex = this.date.month();
		const monthName = i18n.__(`months.full.${MONTH_NAMES[monthIndex]}`);

		const space = ` `;
		const dayText = `${dayIndex}`;
		const monthText = `${monthName}`;
		const yearText = `${YEAR}`;
		const fullDateText = `${dayText}${space}${monthText}${space}${yearText}`;
		this.doc.fillColor(COLORS.black).fontSize(FONT_SIZES.header);
		const spaceWidth = this.doc.widthOfString(space);
		const dayTextWidth = this.doc.widthOfString(dayText);
		const monthTextWidth = this.doc.widthOfString(monthText);
		const yearTextWidth = this.doc.widthOfString(yearText);

		const textHeight = this.doc.heightOfString(fullDateText);

		let { x: textX, y: textY } = Text.getCenteredPos(
			fullDateText,
			MARGINS.left,
			MARGINS.top,
			CONTENT_WIDTH,
			textHeight
		);

		this.doc.text(dayText + space, textX, textY);

		let goToId = getAnchorId('month', monthIndex);
		textX = textX + dayTextWidth + spaceWidth;
		this.doc.text(monthText + space, textX, textY, {
			goTo: goToId,
		});
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(1)
			.moveTo(textX, textY + textHeight - 5)
			.lineTo(textX + monthTextWidth, textY + textHeight - 5)
			.stroke();

		goToId = getAnchorId('calendar');
		textX = textX + monthTextWidth + spaceWidth;
		this.doc.text(yearText, textX, textY, {
			goTo: goToId,
		});
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(1)
			.moveTo(textX, textY + textHeight - 5)
			.lineTo(textX + yearTextWidth, textY + textHeight - 5)
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

	private addLink() {
		Text.reset();

		const indent = 0.3 * CONTENT_WIDTH;

		const PADDING = 10;
		const TOP_MARGIN = 30;
		const LINE_HEIGHT = 1;
		const lineX = MARGINS.left + indent;
		const lineY = this.headerY + TOP_MARGIN;
		const dayIndex = this.date.date();
		const monthIndex = this.date.month();

		const width = CONTENT_WIDTH - 2 * indent;

		// add line
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(lineX, lineY)
			.lineTo(lineX + width, lineY)
			.stroke();

		// add text
		const textKey = this.type === 'schedule' ? 'notesLink' : 'scheduleLink';

		const goToText = i18n.__(`pages.dayPage.goTo`).toUpperCase();
		const text = i18n.__(`pages.dayPage.${textKey}`).toUpperCase();
		const fullText = `${goToText} ${text}`;

		this.doc.fillColor(COLORS.black).fontSize(FONT_SIZES.body);
		const height = this.doc.heightOfString(fullText);
		const linkHeight = height + 2 * PADDING;
		const section1TopPadding = 30;
		this.section1Y = lineY + linkHeight + section1TopPadding;

		const { x: textX, y: textY } = Text.getCenteredPos(fullText, lineX, lineY, width, linkHeight);

		this.doc.text(fullText, textX, textY);

		// add line
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(lineX, lineY + linkHeight)
			.lineTo(lineX + width, lineY + linkHeight)
			.stroke();

		// add link
		const goToIdType = this.type === 'schedule' ? 'dayNotes' : 'daySchedule';
		const goToId = getAnchorId(goToIdType, monthIndex, dayIndex);
		goToId && this.doc.goTo(lineX, lineY, width, linkHeight, goToId);

		Text.reset();
	}

	private addSection(x: number, y: number, width: number, headerText: string) {
		Text.reset();

		const textPadding = 20;
		const textHeight = this.doc.fontSize(FONT_SIZES.body).heightOfString(headerText);
		const headerHeight = textHeight + 2 * textPadding;

		this.doc.fillColor(COLORS.grayLight1).rect(x, y, width, headerHeight).fill();

		Text.reset();

		const { x: textX, y: textY } = Text.getCenteredPos(headerText, x, y, width, headerHeight);
		this.doc.fillColor(COLORS.grayLight1).rect(x, y, width, headerHeight).fill();
		this.doc.fillColor(COLORS.black).text(headerText, textX, textY);
		const LINE_HEIGHT = 1;

		// add lines
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(x, y)
			.lineTo(x + width, y)
			.stroke();
		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(x, y + headerHeight)
			.lineTo(x + width, y + headerHeight)
			.stroke();

		const HEADER_CONTENT_GAP = 10;
		this.addSectionLines(this.section1Y + headerHeight + HEADER_CONTENT_GAP);

		Text.reset();
	}

	addSectionLines(spaceAbove: number) {
		Text.reset();

		const spaceSide = MARGINS.left;
		const spaceBelow = MARGINS.bottom;
		const width = CONTENT_WIDTH;
		const height = PAGE_HEIGHT - spaceAbove - spaceBelow;
		const HOUR_COUNT = 24;
		const COLUMN_COUNT = 1;
		const ROW_COUNT = HOUR_COUNT;
		const HORIZONTAL_GAP = 0;
		const VERTICAL_GAP = 0;

		Grid.add(spaceSide, spaceAbove, width, height, this.drawLine, ROW_COUNT, COLUMN_COUNT, {
			horizontal: HORIZONTAL_GAP,
			vertical: VERTICAL_GAP,
		});

		if (this.type === 'schedule') {
			Text.reset();

			Grid.add(spaceSide, spaceAbove, width, height, this.addHour, ROW_COUNT, COLUMN_COUNT, {
				horizontal: HORIZONTAL_GAP,
				vertical: VERTICAL_GAP,
			});
		}

		Text.reset();
	}

	private drawLine({ x, y, cellWidth, cellHeight }: GridCellCallbackParams) {
		const LINE_HEIGHT = 1;

		this.doc
			.strokeColor(COLORS.grayLight4)
			.lineCap('round')
			.lineWidth(LINE_HEIGHT)
			.moveTo(x, y + cellHeight)
			.lineTo(x + cellWidth, y + cellHeight)
			.stroke();
	}

	private addHour({ x, y, cellHeight, cellIndex }: GridCellCallbackParams) {
		const HOUR_LEFT_MARGIN = 10;

		const text = `${cellIndex.toString().padStart(2, '0')}:00`;
		this.doc.fillColor(COLORS.grayDark3).fontSize(FONT_SIZES.body);
		const textWidth = this.doc.widthOfString(text);

		const { x: textX, y: textY } = Text.getCenteredPos(text, x + HOUR_LEFT_MARGIN, y, textWidth, cellHeight);
		this.doc.text(text, textX, textY);
	}
}
