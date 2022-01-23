export class Box {
	static run(
		createCell: (index: number, x: number, y: number, width: number, height: number) => void,
		x: number,
		y: number,
		width: number,
		height: number,
		rows = 1,
		columns = 1
	) {
		const cellWidth = width / columns;
		const cellHeight = height / rows;

		for (let row = 0; row < rows; row++) {
			const cellY = y + row * cellHeight;

			for (let column = 0; column < columns; column++) {
				const cellX = x + column * cellWidth;

				const index = column + row * columns;
				createCell(index, cellX, cellY, cellWidth, cellHeight);
			}
		}
	}
}
