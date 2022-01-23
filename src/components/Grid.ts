export interface GridCellCallbackParams {
	x: number;
	y: number;
	height: number;
}

class GridClass {
	doc: PDFKit.PDFDocument;

	constructor(doc: PDFKit.PDFDocument) {
		this.doc = doc;
	}

	add(x: number, y: number, width: number, height: number, addPre: (params: GridCellCallbackParams) => void, rowCount = 1, columnCount = 1, gap: {horizontal: 0, vertical: 0}) {
		const horizontalGapCount = columnCount - 1;
		const verticalGapCount = rowCount - 1;

		const cellWidth = (width - horizontalGapCount * gap.vertical) / columnCount;
		const cellHeight = (height - verticalGapCount * gap.horizontal) / rowCount;
		// for (let i = 0; i < count; i++) {
		// 	addPre(x, y, height);
		// }
	}
}

let Grid: GridClass;

export function initGrid(doc: PDFKit.PDFDocument) {
	Grid = new GridClass(doc);
}

export { Grid };
