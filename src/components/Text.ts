import { FONTS } from '../constants/common';
import { MARGINS, CONTENT_WIDTH, CONTENT_HEIGHT } from '../constants/page';
import { COLORS, FONT_SIZES } from '../constants/theme';
class TextClass {
	doc: PDFKit.PDFDocument;

	constructor(doc: PDFKit.PDFDocument) {
		this.doc = doc;
	}

	getCenteredPos(
		text: string,
		boxX = MARGINS.left,
		boxY = MARGINS.top,
		boxWidth = CONTENT_WIDTH,
		boxHeight = CONTENT_HEIGHT,
		forceSingleLine = false
	) {
		const stringWidth = this.doc.widthOfString(text);
		const stringHeight = forceSingleLine ? this.doc.currentLineHeight() : this.doc.heightOfString(text);
		const x = boxX + (boxWidth / 2 - stringWidth / 2);
		const y = boxY + (boxHeight / 2 - stringHeight / 2);

		return { x, y };
	}

	reset() {
		this.doc.font(FONTS.serif.regular);
		this.doc.fontSize(FONT_SIZES.body);
		this.doc.fillColor(COLORS.black);
		this.doc.strokeColor(COLORS.black);
		this.doc.lineWidth(1);

		return this.doc;
	}
}

let Text: TextClass;

export function initText(doc: PDFKit.PDFDocument) {
	Text = new TextClass(doc);
}

export { Text };
