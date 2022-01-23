import i18n from 'i18n';
import dayjs from 'dayjs';
import { Days, FONTS, Months } from '../../constants/common';
import { AnchorDayTypes, anchorsKeys, YEAR } from '../../constants/config';
import { COLORS, FONT_SIZES } from '../../constants/theme';
import { Text } from '../Text';
import { getAnchorId } from '../../domain/navigation';

export class MonthSection {
	doc: PDFKit.PDFDocument;
	name: Months;
	index: number;
	x: number;
	y: number;
	width: number;
	height: number;
	monthBarHeight: number;
	dayBarHeight: number;

	constructor(doc: PDFKit.PDFDocument, name: Months, index: number, x: number, y: number, width: number, height: number) {
		this.doc = doc;
		this.name = name;
		this.index = index;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.monthBarHeight = FONT_SIZES.calendar.monthName * 2;
		this.dayBarHeight = FONT_SIZES.calendar.day * 2;
	}

	add() {
		this.addMonthBar();
		this.addDayBar();
		this.addGrid();
	}

	private addMonthBar() {
		Text.reset();
		const name = i18n.__(`months.full.${this.name}`);
		this.doc.fontSize(FONT_SIZES.calendar.monthName).fillColor(COLORS.grayDark2);
		const { x, y } = Text.getCenteredPos(name, this.x, this.y, this.width, this.monthBarHeight, true);
		this.doc.text(name, x, y);

		const goToId = getAnchorId('month', this.index);
		goToId && this.doc.goTo(this.x, this.y, this.width, this.monthBarHeight, goToId, {});
		Text.reset();
	}

	private addGrid() {
		Text.reset();

		const days = Object.values(Days);
		const ROW_COUNT = 6;
		const barHeights = this.monthBarHeight + this.dayBarHeight;
		const width = this.width / days.length;
		const rowHeight = (this.height - barHeights) / ROW_COUNT;

		// lines
		for (let row = 0; row < ROW_COUNT; row++) {
			const y = this.y + barHeights + row * rowHeight;

			days.forEach((_, index) => {
				const x = this.x + index * width;

				this.doc.strokeColor(COLORS.grayLight3);
				this.doc.rect(x, y, width, rowHeight).stroke();
			});
		}

		// days
		const date = dayjs(`${YEAR}-${Months[this.name].toUpperCase()}-01`, 'YYYY-MMMM-DD');
		const dayCount = date.daysInMonth();
		const startingDayOfWeek = date.isoWeekday();
		let dayOfWeek = startingDayOfWeek;
		const DAYS_IN_WEEK = 7;

		for (let dayIndex = 1; dayIndex <= dayCount; dayIndex++) {
			const row = Math.floor((dayIndex - 1 + (startingDayOfWeek - 1)) / DAYS_IN_WEEK);
			const boxX = this.x + (dayOfWeek - 1) * width;
			const boxY = this.y + barHeights + row * rowHeight;

			this.doc.fontSize(FONT_SIZES.calendar.day).fillColor(COLORS.grayDark2);
			const { x, y } = Text.getCenteredPos(String(dayIndex), boxX, boxY, width, rowHeight, true);
			this.doc.text(String(dayIndex), x, y);

			const goToId = getAnchorId('day', this.index, dayIndex);
			goToId && this.doc.goTo(boxX, boxY, width, rowHeight, goToId, {});

			dayOfWeek = (dayOfWeek + 1) % (DAYS_IN_WEEK + 1);
			dayOfWeek = dayOfWeek === 0 ? 1 : dayOfWeek;
		}

		Text.reset();
	}

	private addDayBar() {
		Text.reset();

		const days = Object.values(Days);
		const width = this.width / days.length;
		const height = this.dayBarHeight;
		const y = this.y + this.monthBarHeight;

		days.forEach((day, index) => {
			const x = this.x + index * width;
			const fillColor = day === 'saturday' || day === 'sunday' ? COLORS.grayLight2 : COLORS.grayLight1;
			this.doc.strokeColor(COLORS.grayLight3).fillColor(fillColor);
			this.doc.rect(x, y, width, height).fillAndStroke();

			const dayName = i18n.__(`days.short.${day}`);
			this.doc
				.strokeColor(COLORS.black)
				.fillColor(COLORS.black)
				.fontSize(FONT_SIZES.calendar.day)
				.font(FONTS.serif.bold);
			const { x: dayX, y: dayY } = Text.getCenteredPos(dayName, x, y, width, height);
			this.doc.text(dayName, dayX, dayY);
		});

		Text.reset();
	}
}
