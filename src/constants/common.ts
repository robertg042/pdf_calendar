export const shared = {
	dayPageHeaderHeight: 0,
};

export const FONTS = {
	serif: {
		regular: 'Primary Serif Regular',
		bold: 'Primary Serif Bold',
		italic: 'Primary Serif Italic',
		boldItalic: 'Primary Serif Bold Italic',
	},
};

export enum Days {
	monday = 'monday',
	tuesday = 'tuesday',
	wednesday = 'wednesday',
	thursday = 'thursday',
	friday = 'friday',
	saturday = 'saturday',
	sunday = 'sunday',
}

export type MonthsType =
	| 'january'
	| 'february'
	| 'march'
	| 'april'
	| 'may'
	| 'june'
	| 'july'
	| 'august'
	| 'september'
	| 'october'
	| 'november'
	| 'december';

export const MONTH_COUNT = 12;

export const MONTH_NAMES: MonthsType[] = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december',
];

export const DAY_NAMES: Days[] = [
	Days.monday,
	Days.tuesday,
	Days.wednesday,
	Days.thursday,
	Days.friday,
	Days.saturday,
	Days.sunday
];

export const LINK_ARROW_Y_FACTOR = 12;
