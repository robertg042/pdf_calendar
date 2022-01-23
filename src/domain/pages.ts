import dayjs from 'dayjs';
import { LINK_ARROW_Y_FACTOR, MONTH_COUNT, shared } from '../constants/common';
import { MARGINS, PAGE_WIDTH } from '../constants/page';
import { ARROW_BACK, ARROW_FORWARD } from '../constants/shapes';
import { DayPage } from '../pages/DayPage';
import { Document } from '../pages/Document';
import { MonthPage } from '../pages/MonthPage';
import { DayPageType } from '../types/page';
import { daysInYear } from './date';
import { getAnchorId } from './navigation';

export const addDayPage = (
	document: Document,
	outline: PDFKit.PDFOutline,
	date: dayjs.Dayjs,
	previousDate: dayjs.Dayjs | null,
	nextDate: dayjs.Dayjs | null,
	index: number,
	type: DayPageType
) => {
	const page = new DayPage(document.kit, date, outline, type);
	page.add();

	if (index !== 1) {
		// add link to previous day
		document.kit
			.save()
			.translate(70, MARGINS.top + LINK_ARROW_Y_FACTOR)
			.scale(0.1)
			.path(ARROW_BACK)
			.fillAndStroke()
			.restore();

		if (previousDate) {
			const dayIndex = previousDate.date();
			const monthIndex = previousDate.month();

			const width = 75;
			const height = shared.dayPageHeaderHeight || 80;
			const x = MARGINS.left;
			const y = MARGINS.top;
			const goToIdType = type === 'schedule' ? 'daySchedule' : 'dayNotes';
			const goToId = getAnchorId(goToIdType, monthIndex, dayIndex);
			goToId && document.kit.goTo(x, y, width, height, goToId, {});
		}
	}

	if (index !== daysInYear) {
		// add link to next day
		document.kit
			.save()
			.translate(PAGE_WIDTH - 100, MARGINS.top + LINK_ARROW_Y_FACTOR)
			.scale(0.1)
			.path(ARROW_FORWARD)
			.fillAndStroke()
			.restore();

		if (nextDate) {
			const dayIndex = nextDate.date();
			const monthIndex = nextDate.month();

			const width = 75;
			const height = shared.dayPageHeaderHeight || 80;
			const x = PAGE_WIDTH - MARGINS.right - width;
			const y = MARGINS.top;
			const goToIdType = type === 'schedule' ? 'daySchedule' : 'dayNotes';
			const goToId = getAnchorId(goToIdType, monthIndex, dayIndex);
			goToId && document.kit.goTo(x, y, width, height, goToId, {});
		}
	}
};

export const addMonthPage = (
	document: Document,
	outline: PDFKit.PDFOutline,
	date: dayjs.Dayjs,
	previousDate: dayjs.Dayjs | null,
	nextDate: dayjs.Dayjs | null,
	index: number
) => {
	const page = new MonthPage(document.kit, date, outline);
	page.add();

	if (index !== 1) {
		// add link to previous month
		document.kit
			.save()
			.translate(70, MARGINS.top + LINK_ARROW_Y_FACTOR)
			.scale(0.1)
			.path(ARROW_BACK)
			.fillAndStroke()
			.restore();

		if (previousDate) {
			const monthIndex = previousDate.month();

			const width = 75;
			const height = shared.dayPageHeaderHeight || 80;
			const x = MARGINS.left;
			const y = MARGINS.top;
			const goToId = getAnchorId('month', monthIndex);
			goToId && document.kit.goTo(x, y, width, height, goToId, {});
		}
	}
	if (index !== MONTH_COUNT) {
		// add link to next month
		document.kit
			.save()
			.translate(PAGE_WIDTH - 100, MARGINS.top + LINK_ARROW_Y_FACTOR)
			.scale(0.1)
			.path(ARROW_FORWARD)
			.fillAndStroke()
			.restore();

		if (nextDate) {
			const monthIndex = nextDate.month();

			const width = 75;
			const height = shared.dayPageHeaderHeight || 80;
			const x = PAGE_WIDTH - MARGINS.right - width;
			const y = MARGINS.top;
			const goToId = getAnchorId('month', monthIndex);
			goToId && document.kit.goTo(x, y, width, height, goToId, {});
		}
	}
};
