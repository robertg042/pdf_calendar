import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { initI18n } from './i18n';
import { initText } from './components/Text';
import { initGrid } from './components/Grid';
import { Document } from './pages/Document';
import { CoverPage } from './pages/CoverPage';
import { CalendarPage } from './pages/CalendarPage';
import { FONTS, MONTH_COUNT } from './constants/common';
import { MARGINS, PAGE_HEIGHT, PAGE_WIDTH } from './constants/page';
import { COLORS } from './constants/theme';
import { DRAW_HELPER_LINES, YEAR } from './constants/config';
import { addDayPage, addMonthPage } from './domain/pages';
import { daysInYear } from './domain/date';

dayjs.extend(isoWeek);

initI18n();

const document = new Document();

initText(document.kit);
initGrid(document.kit);

document.setFonts();
document.kit.font(FONTS.serif.regular);
document.writeToFile();

const coverPage = new CoverPage(document.kit);
coverPage.add();

const calendarPage = new CalendarPage(document.kit);
calendarPage.add();
DRAW_HELPER_LINES && drawHelperLines(document.kit);

// add month pages
let monthdate = dayjs(`${YEAR}-01-01`);
let monthPreviousDate: dayjs.Dayjs | null = null;
let monthNextDate: dayjs.Dayjs | null = null;
const monthsOutline = document.kit.outline.addItem('Months', { expanded: true });

for (let month = 1; month <= MONTH_COUNT; month++) {
	monthNextDate = dayjs(monthdate.add(1, 'month'));

	addMonthPage(document, monthsOutline, monthdate, monthPreviousDate, monthNextDate, month);
	DRAW_HELPER_LINES && drawHelperLines(document.kit);

	monthPreviousDate = dayjs(monthdate);
	monthdate = monthNextDate;
}

// add day pages
let daydate = dayjs(`${YEAR}-01-01`);
let dayPreviousDate: dayjs.Dayjs | null = null;
let dayNextDate: dayjs.Dayjs | null = null;

const daysOutline = document.kit.outline.addItem('Days', { expanded: true });

for (let day = 1; day <= daysInYear; day++) {
	dayNextDate = dayjs(daydate.add(1, 'day'));

	addDayPage(document, daysOutline, daydate, dayPreviousDate, dayNextDate, day, 'notes1');
	DRAW_HELPER_LINES && drawHelperLines(document.kit);

	addDayPage(document, daysOutline, daydate, dayPreviousDate, dayNextDate, day, 'notes2');
	DRAW_HELPER_LINES && drawHelperLines(document.kit);

	addDayPage(document, daysOutline, daydate, dayPreviousDate, dayNextDate, day, 'notes3');
	DRAW_HELPER_LINES && drawHelperLines(document.kit);

	addDayPage(document, daysOutline, daydate, dayPreviousDate, dayNextDate, day, 'schedule');
	DRAW_HELPER_LINES && drawHelperLines(document.kit);

	dayPreviousDate = dayjs(daydate);
	daydate = dayNextDate;
}

document.finalize();

function drawHelperLines(doc: PDFKit.PDFDocument) {
	doc.strokeColor(COLORS.grayLight1);
	// center horizontal
	doc
		.moveTo(0, PAGE_HEIGHT / 2)
		.lineTo(PAGE_WIDTH, PAGE_HEIGHT / 2)
		.stroke();
	// center vertical
	doc
		.moveTo(PAGE_WIDTH / 2, 0)
		.lineTo(PAGE_WIDTH / 2, PAGE_HEIGHT)
		.stroke();
	// frame top
	doc
		.moveTo(MARGINS.left, MARGINS.top)
		.lineTo(PAGE_WIDTH - MARGINS.right, MARGINS.top)
		.stroke();
	// frame bottom
	doc
		.moveTo(MARGINS.left, PAGE_HEIGHT - MARGINS.bottom)
		.lineTo(PAGE_WIDTH - MARGINS.right, PAGE_HEIGHT - MARGINS.bottom)
		.stroke();
	// frame left
	doc
		.moveTo(MARGINS.left, MARGINS.top)
		.lineTo(MARGINS.left, PAGE_HEIGHT - MARGINS.bottom)
		.stroke();
	// frame right
	doc
		.moveTo(PAGE_WIDTH - MARGINS.right, MARGINS.top)
		.lineTo(PAGE_WIDTH - MARGINS.right, PAGE_HEIGHT - MARGINS.bottom)
		.stroke();
}
