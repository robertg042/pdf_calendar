import fs from 'fs';
import PDFDocument from 'pdfkit';
import { FONTS } from '../constants/common';
import { DOCUMENT_CONFIG, PATHS } from '../constants/config';

export class Document {
	kit: PDFKit.PDFDocument;

	constructor() {
		this.kit = new PDFDocument(DOCUMENT_CONFIG);
	}

	setFonts() {
		this.kit.registerFont(FONTS.serif.regular, PATHS.fonts.serif.regular);
		this.kit.registerFont(FONTS.serif.bold, PATHS.fonts.serif.bold);
		this.kit.registerFont(FONTS.serif.italic, PATHS.fonts.serif.italic);
		this.kit.registerFont(FONTS.serif.boldItalic, PATHS.fonts.serif.boldItalic);
	}

	writeToFile() {
		this.kit.pipe(fs.createWriteStream(PATHS.output));
	}

	finalize() {
		this.kit.end();
	}
}
