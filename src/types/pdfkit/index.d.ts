declare namespace PDFKit {
	interface PDFDocument {
		addNamedDestination(name: string): void;
		outline: PDFOutline;
	}
	interface PDFOutline {
		addItem(
			title: string,
			options?: {
				expanded: boolean;
			}
		): PDFOutline;
		endOutline(): void;
	}
}
