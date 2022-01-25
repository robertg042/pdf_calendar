import path from 'path';
import {
	AnchorDayTypes,
	AnchorMonthTypes,
	DayPageTypeKeyObject,
	DaysAnchorKeyObject,
	Locales,
	MonthsAnchorKeyObject,
} from '../types/common';
import { DayPageType } from '../types/page';

// Project structure
const ROOT_DIR = process.cwd();
const ASSETS_PATH = path.join(ROOT_DIR, 'assets');
const FONTS_PATH = path.join(ASSETS_PATH, 'fonts');
const OUTPUT_FILENAME = 'output.pdf';

export const PATHS = {
	output: path.join(ROOT_DIR, OUTPUT_FILENAME),
	fonts: {
		serif: {
			regular: path.join(FONTS_PATH, 'NotoSerif', 'NotoSerif-Regular.ttf'),
			bold: path.join(FONTS_PATH, 'NotoSerif', 'NotoSerif-Bold.ttf'),
			italic: path.join(FONTS_PATH, 'NotoSerif', 'NotoSerif-Italic.ttf'),
			boldItalic: path.join(FONTS_PATH, 'NotoSerif', 'NotoSerif-BoldItalic.ttf'),
		},
	},
	locales: path.join(ASSETS_PATH, 'locales'),
	images: path.join(ASSETS_PATH, 'images'),
};

export const DOCUMENT_CONFIG = {
	autoFirstPage: false,
};

export const SUPPORTED_LOCALES: Locales[] = ['en'];

// === Project structure

// Settings
export const YEAR = 2022;
export const LOCALE: Locales = 'en';
export const DRAW_HELPER_LINES = false;

export const COVER_IMAGE_PATH = path.join(PATHS.images, 'cover.jpg');

const getDayAnchorKeys = () => {
	const dayAnchorKeys: DayPageTypeKeyObject = {} as DayPageTypeKeyObject;

	const KEYS: DayPageType[] = ['default', 'notes1', 'notes2', 'notes3', 'schedule'];

	// 'month0' .. 'month11'
	const MONTH_KEYS: AnchorMonthTypes[] = Array.from({ length: 12 }).map(
		(_, index) => `month${index}` as AnchorMonthTypes
	);

	// 'day1' .. 'day31'
	const DAY_KEYS: AnchorDayTypes[] = Array.from({ length: 31 }).map((_, index) => `day${index + 1}` as AnchorDayTypes);

	KEYS.forEach((key) => {
		dayAnchorKeys[key] = {} as MonthsAnchorKeyObject;

		MONTH_KEYS.forEach((monthKey, monthIndex) => {
			dayAnchorKeys[key][monthKey] = {} as DaysAnchorKeyObject;

			DAY_KEYS.forEach((dayKey, dayIndex) => {
				// 'month00-00' .. 'month11-31'
				const valueBase = `month${monthIndex.toString().padStart(2, '0')}-${dayIndex.toString().padStart(2, '0')}`;
				let value = valueBase;
				let prefix = '';

				if (key !== 'default') {
					prefix = key;
				}

				// e.g. notes2-month03-04
				value = `${prefix}-${valueBase}`;

				dayAnchorKeys[key][monthKey][dayKey] = value;
			});
		});
	});

	return dayAnchorKeys;
};

export const anchorsKeys = {
	cover: 'cover',
	calendar: 'calendar',
	month: {
		month0: 'full_month00',
		month1: 'full_month01',
		month2: 'full_month02',
		month3: 'full_month03',
		month4: 'full_month04',
		month5: 'full_month05',
		month6: 'full_month06',
		month7: 'full_month07',
		month8: 'full_month08',
		month9: 'full_month09',
		month10: 'full_month10',
		month11: 'full_month11',
	},
	day: getDayAnchorKeys(),
};

// === Settings
