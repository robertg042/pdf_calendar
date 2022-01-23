import i18n from 'i18n';
import { Text } from '../components/Text';
import { anchorsKeys, COVER_IMAGE_PATH, YEAR } from '../constants/config';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../constants/page';
import { COLORS, FONT_SIZES } from '../constants/theme';
import { getAnchorId } from '../domain/navigation';
import { Page } from './Page';

export class CoverPage extends Page {
	doc: PDFKit.PDFDocument;

	constructor(doc: PDFKit.PDFDocument) {
		super(doc);

		this.doc = doc;
	}

	add() {
		super.add();
		this.addCoverImage();
		this.addHeader();

		this.doc.outline.addItem(i18n.__(`bookmarks.${anchorsKeys.cover}`));

		const anchorId = getAnchorId('cover');
		anchorId && super.addAnchor(anchorId);

		Text.reset();
	}

	addCoverImage() {
		this.doc.image(COVER_IMAGE_PATH, 0, 0, {
			cover: [PAGE_WIDTH, PAGE_HEIGHT],
			align: 'center',
			valign: 'center',
		});
	}

	addHeader() {
		Text.reset();
		this.doc.fillColor(COLORS.grayLight1).fontSize(FONT_SIZES.cover.header).text(i18n.__('pages.cover.title'), {
			align: 'center',
		});

		const year = String(YEAR);
		this.doc.fontSize(FONT_SIZES.cover.year).fillColor(COLORS.grayLight1);
		const { x, y } = Text.getCenteredPos(year);
		this.doc.text(year, x, y);
		Text.reset();
	}
}
