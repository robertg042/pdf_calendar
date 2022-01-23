import i18n from 'i18n';
import { MonthSection } from '../components/calendar/MonthSection';
import { Text } from '../components/Text';
import { Months } from '../constants/common';
import { anchorsKeys, YEAR } from '../constants/config';
import { MARGINS, CONTENT_WIDTH, CONTENT_HEIGHT } from '../constants/page';
import { COLORS, FONT_SIZES } from '../constants/theme';
import { getAnchorId } from '../domain/navigation';
import { Page } from './Page';

export class CalendarPage extends Page {
	doc: PDFKit.PDFDocument;
	headerLineY: number;
	headerBottomMargin: number;
	bottomMargin: number;

	constructor(doc: PDFKit.PDFDocument) {
		super(doc);

		this.doc = doc;
		this.headerLineY = 0;
		this.headerBottomMargin = 50;
		this.bottomMargin = MARGINS.bottom * 6;
	}

	add() {
		super.add();
		this.addHeader();
		this.addMonths();

		this.doc.outline.addItem(i18n.__(`bookmarks.${anchorsKeys.calendar}`));

		const anchorId = getAnchorId('calendar');
		anchorId && super.addAnchor(anchorId);

		Text.reset();
	}

	private addHeader() {
		Text.reset();

		// add year text
		const year = String(YEAR);
		this.doc.fillColor(COLORS.black).fontSize(FONT_SIZES.header);
		const yearHeight = this.doc.heightOfString(year);

		const { x: yearX, y: yearY } = Text.getCenteredPos(year, MARGINS.left, MARGINS.top, CONTENT_WIDTH, yearHeight);

		this.doc.text(i18n.__(year), yearX, yearY);

		// add line divider
		const lineHeight = 3;
		const lineX = MARGINS.left;
		const lineY = yearY + yearHeight;
		this.headerLineY = lineY;

		this.doc
			.strokeColor(COLORS.black)
			.lineCap('round')
			.lineWidth(lineHeight)
			.moveTo(lineX, lineY)
			.lineTo(lineX + CONTENT_WIDTH, lineY)
			.stroke();

		Text.reset();
	}

	private addMonths() {
		Text.reset();

		const COLUMN_COUNT = 3;
		const ROW_COUNT = 4;
		const HORIZONTAL_GAP_COUNT = COLUMN_COUNT - 1;
		const VERTICAL_GAP_COUNT = ROW_COUNT - 1;
		const HORIZONTAL_GAP = 20;
		const VERTICAL_GAP = 20;

		const spaceAbove = this.headerLineY + this.headerBottomMargin;
		const spaceBelow = this.bottomMargin;
		const spaceSide = MARGINS.left;

		const width = (CONTENT_WIDTH - HORIZONTAL_GAP_COUNT * VERTICAL_GAP) / COLUMN_COUNT;
		const height = (CONTENT_HEIGHT - VERTICAL_GAP_COUNT * HORIZONTAL_GAP - spaceAbove - spaceBelow) / ROW_COUNT;

		Object.values(Months).forEach((monthName, monthIndex) => {
			const columnIndex = monthIndex % COLUMN_COUNT;
			const rowIndex = Math.floor(monthIndex / COLUMN_COUNT);

			const x = spaceSide + columnIndex * (width + VERTICAL_GAP);
			const y = spaceAbove + rowIndex * (height + HORIZONTAL_GAP);

			const section = new MonthSection(this.doc, monthName, monthIndex, x, y, width, height);
			section.add();
		});

		Text.reset();
	}
}
