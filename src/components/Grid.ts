export interface GridCellCallbackParams {
	x: number;
	y: number;
	cellWidth: number;
	cellHeight: number;
	cellIndex: number;
}

class GridClass {
	doc: PDFKit.PDFDocument;

	constructor(doc: PDFKit.PDFDocument) {
		this.doc = doc;
	}

	add(
		x: number,
		y: number,
		width: number,
		height: number,
		action: (params: GridCellCallbackParams) => void,
		rowCount = 1,
		columnCount = 1,
		gap = { horizontal: 0, vertical: 0 }
	) {
		const horizontalGapCount = columnCount - 1;
		const verticalGapCount = rowCount - 1;
		const cellWidth = (width - horizontalGapCount * gap.horizontal) / columnCount;
		const cellHeight = (height - verticalGapCount * gap.vertical) / rowCount;

		for (let cellIndex = 0, count = rowCount * columnCount; cellIndex < count; cellIndex++) {
			const columnIndex = cellIndex % columnCount;
			const rowIndex = Math.floor(cellIndex / columnCount);
			const cellX = x + columnIndex * (cellWidth + gap.horizontal);
			const cellY = y + rowIndex * (cellHeight + gap.vertical);

			action({ x: cellX, y: cellY, cellWidth, cellHeight, cellIndex });
		}
	}
}

let Grid: GridClass;

export function initGrid(doc: PDFKit.PDFDocument) {
	Grid = new GridClass(doc);
}

export { Grid };
