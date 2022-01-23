import i18n from 'i18n';
import dayjs from 'dayjs';
import { Days, FONTS, Months, MonthsType } from '../constants/common';
import { YEAR } from '../constants/config';
import { COLORS, FONT_SIZES } from '../constants/theme';
import { Text } from './Text';
import { getAnchorId } from '../domain/navigation';
import { Grid, GridCellCallbackParams } from './Grid';

export class CalendarMonthSection {
	doc: PDFKit.PDFDocument;
	name: MonthsType;
	index: number;
	x: number;
	y: number;
	width: number;
	height: number;
	monthBarHeight: number;
	dayBarHeight: number;

	constructor(
		doc: PDFKit.PDFDocument,
		name: MonthsType,
		index: number,
		x: number,
		y: number,
		width: number,
		height: number
	) {
		this.doc = doc;
		this.name = name;
		this.index = index;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.monthBarHeight = FONT_SIZES.calendar.monthName * 2;
		this.dayBarHeight = FONT_SIZES.calendar.day * 2;

		this.addGridLines = this.addGridLines.bind(this);
		this.addGridDays = this.addGridDays.bind(this);
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

		const DAYS_IN_WEEK = 7;
		const ROW_COUNT = 6;
		const COLUMN_COUNT = DAYS_IN_WEEK;
		const barHeights = this.monthBarHeight + this.dayBarHeight;
		const gridX = this.x;
		const gridY = this.y + barHeights;
		const gridWidth = this.width;
		const gridHeight = this.height - barHeights;

		// lines
		Grid.add(gridX, gridY, gridWidth, gridHeight, this.addGridLines, ROW_COUNT, COLUMN_COUNT);

		Text.reset();

		// days
		Grid.add(gridX, gridY, gridWidth, gridHeight, this.addGridDays, ROW_COUNT, COLUMN_COUNT);

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

	private addGridLines({ x, y, cellWidth, cellHeight }: GridCellCallbackParams) {
		this.doc.strokeColor(COLORS.grayLight3);
		this.doc.rect(x, y, cellWidth, cellHeight).stroke();
	}

	private addGridDays({ x, y, cellWidth, cellHeight, cellIndex }: GridCellCallbackParams) {
		const monthIndex = this.index;
		const date = dayjs(`${YEAR}-${Months[this.name].toUpperCase()}-01`, 'YYYY-MMMM-DD');
		const dayCount = date.daysInMonth();
		const startingDayOfWeek = date.isoWeekday();

		const startingIndex = startingDayOfWeek - 1;
		const endingIndex = startingIndex + dayCount;
		if (cellIndex < startingIndex || cellIndex >= endingIndex) return;

		const dayIndex = cellIndex - startingIndex + 1;
		this.doc.fontSize(FONT_SIZES.calendar.day).fillColor(COLORS.grayDark2);
		const { x: textX, y: textY } = Text.getCenteredPos(String(dayIndex), x, y, cellWidth, cellHeight, true);
		this.doc.text(String(dayIndex), textX, textY);

		const goToId = getAnchorId('day', monthIndex, dayIndex);
		goToId && this.doc.goTo(x, y, cellWidth, cellHeight, goToId, {});
	}
}
