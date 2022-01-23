import dayjs from 'dayjs';
import i18n from 'i18n';
import { Text } from '../components/Text';
import { MONTH_NAMES, shared } from '../constants/common';
import { YEAR } from '../constants/config';
import { CONTENT_WIDTH, MARGINS } from '../constants/page';
import { COLORS, FONT_SIZES } from '../constants/theme';
import { getAnchorId } from '../domain/navigation';
import { Page } from './Page';

export class MonthPage extends Page {
	doc: PDFKit.PDFDocument;
	date: dayjs.Dayjs;
	outline: PDFKit.PDFOutline;
	headerY: number;

	constructor(doc: PDFKit.PDFDocument, date: dayjs.Dayjs, outline: PDFKit.PDFOutline) {
		super(doc);

		this.doc = doc;
		this.date = date;
		this.outline = outline;

		this.headerY = 0;
	}

	add() {
		super.add();
		this.addHeader();

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
}
