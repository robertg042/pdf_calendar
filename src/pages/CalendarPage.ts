import i18n from 'i18n';
import { CalendarMonthSection } from '../components/CalendarMonthSection';
import { Grid, GridCellCallbackParams } from '../components/Grid';
import { Text } from '../components/Text';
import { MONTH_NAMES } from '../constants/common';
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
		const HORIZONTAL_GAP = 40;
		const VERTICAL_GAP = 20;

		const spaceAbove = this.headerLineY + this.headerBottomMargin;
		const spaceBelow = this.bottomMargin;
		const spaceSide = MARGINS.left;
		const width = CONTENT_WIDTH;
		const height = CONTENT_HEIGHT - spaceAbove - spaceBelow;

		const addMonthSection = ({ x, y, cellWidth, cellHeight, cellIndex }: GridCellCallbackParams) => {
			const monthName = MONTH_NAMES[cellIndex];
			const section = new CalendarMonthSection(this.doc, monthName, cellIndex, x, y, cellWidth, cellHeight);
			section.add();
		};

		Grid.add(spaceSide, spaceAbove, width, height, addMonthSection, ROW_COUNT, COLUMN_COUNT, {
			horizontal: HORIZONTAL_GAP,
			vertical: VERTICAL_GAP,
		});

		Text.reset();
	}
}
