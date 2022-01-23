import { Text } from '../components/Text';
import { LAYOUT, MARGINS, PAGE_HEIGHT, PAGE_WIDTH } from '../constants/page';
import { COLORS } from '../constants/theme';

export class Page {
	doc: PDFKit.PDFDocument;

	constructor(doc: PDFKit.PDFDocument) {
		this.doc = doc;
	}

	add(margins = MARGINS, size = [PAGE_WIDTH, PAGE_HEIGHT], layout = LAYOUT) {
		this.doc.addPage({
			margins,
			size,
			layout,
		});

		this.doc.strokeColor(COLORS.grayLight2);

		Text.reset();
	}

	addAnchor(name: string) {
		this.doc.addNamedDestination(name);
	}
}
