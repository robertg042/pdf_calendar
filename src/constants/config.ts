import path from 'path';
import { Locales } from '../types/common';

// Project structure
const ROOT_DIR = process.cwd();
const ASSETS_PATH = path.join(ROOT_DIR, 'assets');
const FONTS_PATH = path.join(ASSETS_PATH, 'fonts');

export const PATHS = {
	output: path.join(ROOT_DIR, 'file.pdf'),
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

export const COVER_IMAGE_PATH = path.join(PATHS.images, 'cover.jpg');

export type AnchorDayTypes =
	| 'day1'
	| 'day2'
	| 'day3'
	| 'day4'
	| 'day5'
	| 'day6'
	| 'day7'
	| 'day8'
	| 'day9'
	| 'day10'
	| 'day11'
	| 'day12'
	| 'day13'
	| 'day14'
	| 'day15'
	| 'day16'
	| 'day17'
	| 'day18'
	| 'day19'
	| 'day20'
	| 'day21'
	| 'day22'
	| 'day23'
	| 'day24'
	| 'day25'
	| 'day26'
	| 'day27'
	| 'day28'
	| 'day29'
	| 'day30'
	| 'day31';

export type AnchorMonthTypes =
	| 'month1'
	| 'month2'
	| 'month3'
	| 'month4'
	| 'month5'
	| 'month6'
	| 'month7'
	| 'month8'
	| 'month9'
	| 'month10'
	| 'month11';

export const anchorsKeys = {
	cover: 'cover',
	calendar: 'calendar',
	month: {
		month0: 'month0',
		month1: 'month1',
		month2: 'month2',
		month3: 'month3',
		month4: 'month4',
		month5: 'month5',
		month6: 'month6',
		month7: 'month7',
		month8: 'month8',
		month9: 'month9',
		month10: 'month10',
		month11: 'month11',
	},
	day: {
		default: {
			month0: {
				day1: 'month0_1',
				day2: 'month0_2',
				day3: 'month0_3',
				day4: 'month0_4',
				day5: 'month0_5',
				day6: 'month0_6',
				day7: 'month0_7',
				day8: 'month0_8',
				day9: 'month0_9',
				day10: 'month0_10',
				day11: 'month0_11',
				day12: 'month0_12',
				day13: 'month0_13',
				day14: 'month0_14',
				day15: 'month0_15',
				day16: 'month0_16',
				day17: 'month0_17',
				day18: 'month0_18',
				day19: 'month0_19',
				day20: 'month0_20',
				day21: 'month0_21',
				day22: 'month0_22',
				day23: 'month0_23',
				day24: 'month0_24',
				day25: 'month0_25',
				day26: 'month0_26',
				day27: 'month0_27',
				day28: 'month0_28',
				day29: 'month0_29',
				day30: 'month0_30',
				day31: 'month0_31',
			},
			month1: {
				day1: 'month1_1',
				day2: 'month1_2',
				day3: 'month1_3',
				day4: 'month1_4',
				day5: 'month1_5',
				day6: 'month1_6',
				day7: 'month1_7',
				day8: 'month1_8',
				day9: 'month1_9',
				day10: 'month1_10',
				day11: 'month1_11',
				day12: 'month1_12',
				day13: 'month1_13',
				day14: 'month1_14',
				day15: 'month1_15',
				day16: 'month1_16',
				day17: 'month1_17',
				day18: 'month1_18',
				day19: 'month1_19',
				day20: 'month1_20',
				day21: 'month1_21',
				day22: 'month1_22',
				day23: 'month1_23',
				day24: 'month1_24',
				day25: 'month1_25',
				day26: 'month1_26',
				day27: 'month1_27',
				day28: 'month1_28',
				day29: 'month1_29',
				day30: 'month1_30',
				day31: 'month1_31',
			},
			month2: {
				day1: 'month2_1',
				day2: 'month2_2',
				day3: 'month2_3',
				day4: 'month2_4',
				day5: 'month2_5',
				day6: 'month2_6',
				day7: 'month2_7',
				day8: 'month2_8',
				day9: 'month2_9',
				day10: 'month2_10',
				day11: 'month2_11',
				day12: 'month2_12',
				day13: 'month2_13',
				day14: 'month2_14',
				day15: 'month2_15',
				day16: 'month2_16',
				day17: 'month2_17',
				day18: 'month2_18',
				day19: 'month2_19',
				day20: 'month2_20',
				day21: 'month2_21',
				day22: 'month2_22',
				day23: 'month2_23',
				day24: 'month2_24',
				day25: 'month2_25',
				day26: 'month2_26',
				day27: 'month2_27',
				day28: 'month2_28',
				day29: 'month2_29',
				day30: 'month2_30',
				day31: 'month2_31',
			},
			month3: {
				day1: 'month3_1',
				day2: 'month3_2',
				day3: 'month3_3',
				day4: 'month3_4',
				day5: 'month3_5',
				day6: 'month3_6',
				day7: 'month3_7',
				day8: 'month3_8',
				day9: 'month3_9',
				day10: 'month3_10',
				day11: 'month3_11',
				day12: 'month3_12',
				day13: 'month3_13',
				day14: 'month3_14',
				day15: 'month3_15',
				day16: 'month3_16',
				day17: 'month3_17',
				day18: 'month3_18',
				day19: 'month3_19',
				day20: 'month3_20',
				day21: 'month3_21',
				day22: 'month3_22',
				day23: 'month3_23',
				day24: 'month3_24',
				day25: 'month3_25',
				day26: 'month3_26',
				day27: 'month3_27',
				day28: 'month3_28',
				day29: 'month3_29',
				day30: 'month3_30',
				day31: 'month3_31',
			},
			month4: {
				day1: 'month4_1',
				day2: 'month4_2',
				day3: 'month4_3',
				day4: 'month4_4',
				day5: 'month4_5',
				day6: 'month4_6',
				day7: 'month4_7',
				day8: 'month4_8',
				day9: 'month4_9',
				day10: 'month4_10',
				day11: 'month4_11',
				day12: 'month4_12',
				day13: 'month4_13',
				day14: 'month4_14',
				day15: 'month4_15',
				day16: 'month4_16',
				day17: 'month4_17',
				day18: 'month4_18',
				day19: 'month4_19',
				day20: 'month4_20',
				day21: 'month4_21',
				day22: 'month4_22',
				day23: 'month4_23',
				day24: 'month4_24',
				day25: 'month4_25',
				day26: 'month4_26',
				day27: 'month4_27',
				day28: 'month4_28',
				day29: 'month4_29',
				day30: 'month4_30',
				day31: 'month4_31',
			},
			month5: {
				day1: 'month5_1',
				day2: 'month5_2',
				day3: 'month5_3',
				day4: 'month5_4',
				day5: 'month5_5',
				day6: 'month5_6',
				day7: 'month5_7',
				day8: 'month5_8',
				day9: 'month5_9',
				day10: 'month5_10',
				day11: 'month5_11',
				day12: 'month5_12',
				day13: 'month5_13',
				day14: 'month5_14',
				day15: 'month5_15',
				day16: 'month5_16',
				day17: 'month5_17',
				day18: 'month5_18',
				day19: 'month5_19',
				day20: 'month5_20',
				day21: 'month5_21',
				day22: 'month5_22',
				day23: 'month5_23',
				day24: 'month5_24',
				day25: 'month5_25',
				day26: 'month5_26',
				day27: 'month5_27',
				day28: 'month5_28',
				day29: 'month5_29',
				day30: 'month5_30',
				day31: 'month5_31',
			},
			month6: {
				day1: 'month6_1',
				day2: 'month6_2',
				day3: 'month6_3',
				day4: 'month6_4',
				day5: 'month6_5',
				day6: 'month6_6',
				day7: 'month6_7',
				day8: 'month6_8',
				day9: 'month6_9',
				day10: 'month6_10',
				day11: 'month6_11',
				day12: 'month6_12',
				day13: 'month6_13',
				day14: 'month6_14',
				day15: 'month6_15',
				day16: 'month6_16',
				day17: 'month6_17',
				day18: 'month6_18',
				day19: 'month6_19',
				day20: 'month6_20',
				day21: 'month6_21',
				day22: 'month6_22',
				day23: 'month6_23',
				day24: 'month6_24',
				day25: 'month6_25',
				day26: 'month6_26',
				day27: 'month6_27',
				day28: 'month6_28',
				day29: 'month6_29',
				day30: 'month6_30',
				day31: 'month6_31',
			},
			month7: {
				day1: 'month7_1',
				day2: 'month7_2',
				day3: 'month7_3',
				day4: 'month7_4',
				day5: 'month7_5',
				day6: 'month7_6',
				day7: 'month7_7',
				day8: 'month7_8',
				day9: 'month7_9',
				day10: 'month7_10',
				day11: 'month7_11',
				day12: 'month7_12',
				day13: 'month7_13',
				day14: 'month7_14',
				day15: 'month7_15',
				day16: 'month7_16',
				day17: 'month7_17',
				day18: 'month7_18',
				day19: 'month7_19',
				day20: 'month7_20',
				day21: 'month7_21',
				day22: 'month7_22',
				day23: 'month7_23',
				day24: 'month7_24',
				day25: 'month7_25',
				day26: 'month7_26',
				day27: 'month7_27',
				day28: 'month7_28',
				day29: 'month7_29',
				day30: 'month7_30',
				day31: 'month7_31',
			},
			month8: {
				day1: 'month8_1',
				day2: 'month8_2',
				day3: 'month8_3',
				day4: 'month8_4',
				day5: 'month8_5',
				day6: 'month8_6',
				day7: 'month8_7',
				day8: 'month8_8',
				day9: 'month8_9',
				day10: 'month8_10',
				day11: 'month8_11',
				day12: 'month8_12',
				day13: 'month8_13',
				day14: 'month8_14',
				day15: 'month8_15',
				day16: 'month8_16',
				day17: 'month8_17',
				day18: 'month8_18',
				day19: 'month8_19',
				day20: 'month8_20',
				day21: 'month8_21',
				day22: 'month8_22',
				day23: 'month8_23',
				day24: 'month8_24',
				day25: 'month8_25',
				day26: 'month8_26',
				day27: 'month8_27',
				day28: 'month8_28',
				day29: 'month8_29',
				day30: 'month8_30',
				day31: 'month8_31',
			},
			month9: {
				day1: 'month9_1',
				day2: 'month9_2',
				day3: 'month9_3',
				day4: 'month9_4',
				day5: 'month9_5',
				day6: 'month9_6',
				day7: 'month9_7',
				day8: 'month9_8',
				day9: 'month9_9',
				day10: 'month9_10',
				day11: 'month9_11',
				day12: 'month9_12',
				day13: 'month9_13',
				day14: 'month9_14',
				day15: 'month9_15',
				day16: 'month9_16',
				day17: 'month9_17',
				day18: 'month9_18',
				day19: 'month9_19',
				day20: 'month9_20',
				day21: 'month9_21',
				day22: 'month9_22',
				day23: 'month9_23',
				day24: 'month9_24',
				day25: 'month9_25',
				day26: 'month9_26',
				day27: 'month9_27',
				day28: 'month9_28',
				day29: 'month9_29',
				day30: 'month9_30',
				day31: 'month9_31',
			},
			month10: {
				day1: 'month10_1',
				day2: 'month10_2',
				day3: 'month10_3',
				day4: 'month10_4',
				day5: 'month10_5',
				day6: 'month10_6',
				day7: 'month10_7',
				day8: 'month10_8',
				day9: 'month10_9',
				day10: 'month10_10',
				day11: 'month10_11',
				day12: 'month10_12',
				day13: 'month10_13',
				day14: 'month10_14',
				day15: 'month10_15',
				day16: 'month10_16',
				day17: 'month10_17',
				day18: 'month10_18',
				day19: 'month10_19',
				day20: 'month10_20',
				day21: 'month10_21',
				day22: 'month10_22',
				day23: 'month10_23',
				day24: 'month10_24',
				day25: 'month10_25',
				day26: 'month10_26',
				day27: 'month10_27',
				day28: 'month10_28',
				day29: 'month10_29',
				day30: 'month10_30',
				day31: 'month10_31',
			},
			month11: {
				day1: 'month11_1',
				day2: 'month11_2',
				day3: 'month11_3',
				day4: 'month11_4',
				day5: 'month11_5',
				day6: 'month11_6',
				day7: 'month11_7',
				day8: 'month11_8',
				day9: 'month11_9',
				day10: 'month11_10',
				day11: 'month11_11',
				day12: 'month11_12',
				day13: 'month11_13',
				day14: 'month11_14',
				day15: 'month11_15',
				day16: 'month11_16',
				day17: 'month11_17',
				day18: 'month11_18',
				day19: 'month11_19',
				day20: 'month11_20',
				day21: 'month11_21',
				day22: 'month11_22',
				day23: 'month11_23',
				day24: 'month11_24',
				day25: 'month11_25',
				day26: 'month11_26',
				day27: 'month11_27',
				day28: 'month11_28',
				day29: 'month11_29',
				day30: 'month11_30',
				day31: 'month11_31',
			},
		},
		schedule: {
			month0: {
				day1: 'month0_1_schedule',
				day2: 'month0_2_schedule',
				day3: 'month0_3_schedule',
				day4: 'month0_4_schedule',
				day5: 'month0_5_schedule',
				day6: 'month0_6_schedule',
				day7: 'month0_7_schedule',
				day8: 'month0_8_schedule',
				day9: 'month0_9_schedule',
				day10: 'month0_10_schedule',
				day11: 'month0_11_schedule',
				day12: 'month0_12_schedule',
				day13: 'month0_13_schedule',
				day14: 'month0_14_schedule',
				day15: 'month0_15_schedule',
				day16: 'month0_16_schedule',
				day17: 'month0_17_schedule',
				day18: 'month0_18_schedule',
				day19: 'month0_19_schedule',
				day20: 'month0_20_schedule',
				day21: 'month0_21_schedule',
				day22: 'month0_22_schedule',
				day23: 'month0_23_schedule',
				day24: 'month0_24_schedule',
				day25: 'month0_25_schedule',
				day26: 'month0_26_schedule',
				day27: 'month0_27_schedule',
				day28: 'month0_28_schedule',
				day29: 'month0_29_schedule',
				day30: 'month0_30_schedule',
				day31: 'month0_31_schedule',
			},
			month1: {
				day1: 'month1_1_schedule',
				day2: 'month1_2_schedule',
				day3: 'month1_3_schedule',
				day4: 'month1_4_schedule',
				day5: 'month1_5_schedule',
				day6: 'month1_6_schedule',
				day7: 'month1_7_schedule',
				day8: 'month1_8_schedule',
				day9: 'month1_9_schedule',
				day10: 'month1_10_schedule',
				day11: 'month1_11_schedule',
				day12: 'month1_12_schedule',
				day13: 'month1_13_schedule',
				day14: 'month1_14_schedule',
				day15: 'month1_15_schedule',
				day16: 'month1_16_schedule',
				day17: 'month1_17_schedule',
				day18: 'month1_18_schedule',
				day19: 'month1_19_schedule',
				day20: 'month1_20_schedule',
				day21: 'month1_21_schedule',
				day22: 'month1_22_schedule',
				day23: 'month1_23_schedule',
				day24: 'month1_24_schedule',
				day25: 'month1_25_schedule',
				day26: 'month1_26_schedule',
				day27: 'month1_27_schedule',
				day28: 'month1_28_schedule',
				day29: 'month1_29_schedule',
				day30: 'month1_30_schedule',
				day31: 'month1_31_schedule',
			},
			month2: {
				day1: 'month2_1_schedule',
				day2: 'month2_2_schedule',
				day3: 'month2_3_schedule',
				day4: 'month2_4_schedule',
				day5: 'month2_5_schedule',
				day6: 'month2_6_schedule',
				day7: 'month2_7_schedule',
				day8: 'month2_8_schedule',
				day9: 'month2_9_schedule',
				day10: 'month2_10_schedule',
				day11: 'month2_11_schedule',
				day12: 'month2_12_schedule',
				day13: 'month2_13_schedule',
				day14: 'month2_14_schedule',
				day15: 'month2_15_schedule',
				day16: 'month2_16_schedule',
				day17: 'month2_17_schedule',
				day18: 'month2_18_schedule',
				day19: 'month2_19_schedule',
				day20: 'month2_20_schedule',
				day21: 'month2_21_schedule',
				day22: 'month2_22_schedule',
				day23: 'month2_23_schedule',
				day24: 'month2_24_schedule',
				day25: 'month2_25_schedule',
				day26: 'month2_26_schedule',
				day27: 'month2_27_schedule',
				day28: 'month2_28_schedule',
				day29: 'month2_29_schedule',
				day30: 'month2_30_schedule',
				day31: 'month2_31_schedule',
			},
			month3: {
				day1: 'month3_1_schedule',
				day2: 'month3_2_schedule',
				day3: 'month3_3_schedule',
				day4: 'month3_4_schedule',
				day5: 'month3_5_schedule',
				day6: 'month3_6_schedule',
				day7: 'month3_7_schedule',
				day8: 'month3_8_schedule',
				day9: 'month3_9_schedule',
				day10: 'month3_10_schedule',
				day11: 'month3_11_schedule',
				day12: 'month3_12_schedule',
				day13: 'month3_13_schedule',
				day14: 'month3_14_schedule',
				day15: 'month3_15_schedule',
				day16: 'month3_16_schedule',
				day17: 'month3_17_schedule',
				day18: 'month3_18_schedule',
				day19: 'month3_19_schedule',
				day20: 'month3_20_schedule',
				day21: 'month3_21_schedule',
				day22: 'month3_22_schedule',
				day23: 'month3_23_schedule',
				day24: 'month3_24_schedule',
				day25: 'month3_25_schedule',
				day26: 'month3_26_schedule',
				day27: 'month3_27_schedule',
				day28: 'month3_28_schedule',
				day29: 'month3_29_schedule',
				day30: 'month3_30_schedule',
				day31: 'month3_31_schedule',
			},
			month4: {
				day1: 'month4_1_schedule',
				day2: 'month4_2_schedule',
				day3: 'month4_3_schedule',
				day4: 'month4_4_schedule',
				day5: 'month4_5_schedule',
				day6: 'month4_6_schedule',
				day7: 'month4_7_schedule',
				day8: 'month4_8_schedule',
				day9: 'month4_9_schedule',
				day10: 'month4_10_schedule',
				day11: 'month4_11_schedule',
				day12: 'month4_12_schedule',
				day13: 'month4_13_schedule',
				day14: 'month4_14_schedule',
				day15: 'month4_15_schedule',
				day16: 'month4_16_schedule',
				day17: 'month4_17_schedule',
				day18: 'month4_18_schedule',
				day19: 'month4_19_schedule',
				day20: 'month4_20_schedule',
				day21: 'month4_21_schedule',
				day22: 'month4_22_schedule',
				day23: 'month4_23_schedule',
				day24: 'month4_24_schedule',
				day25: 'month4_25_schedule',
				day26: 'month4_26_schedule',
				day27: 'month4_27_schedule',
				day28: 'month4_28_schedule',
				day29: 'month4_29_schedule',
				day30: 'month4_30_schedule',
				day31: 'month4_31_schedule',
			},
			month5: {
				day1: 'month5_1_schedule',
				day2: 'month5_2_schedule',
				day3: 'month5_3_schedule',
				day4: 'month5_4_schedule',
				day5: 'month5_5_schedule',
				day6: 'month5_6_schedule',
				day7: 'month5_7_schedule',
				day8: 'month5_8_schedule',
				day9: 'month5_9_schedule',
				day10: 'month5_10_schedule',
				day11: 'month5_11_schedule',
				day12: 'month5_12_schedule',
				day13: 'month5_13_schedule',
				day14: 'month5_14_schedule',
				day15: 'month5_15_schedule',
				day16: 'month5_16_schedule',
				day17: 'month5_17_schedule',
				day18: 'month5_18_schedule',
				day19: 'month5_19_schedule',
				day20: 'month5_20_schedule',
				day21: 'month5_21_schedule',
				day22: 'month5_22_schedule',
				day23: 'month5_23_schedule',
				day24: 'month5_24_schedule',
				day25: 'month5_25_schedule',
				day26: 'month5_26_schedule',
				day27: 'month5_27_schedule',
				day28: 'month5_28_schedule',
				day29: 'month5_29_schedule',
				day30: 'month5_30_schedule',
				day31: 'month5_31_schedule',
			},
			month6: {
				day1: 'month6_1_schedule',
				day2: 'month6_2_schedule',
				day3: 'month6_3_schedule',
				day4: 'month6_4_schedule',
				day5: 'month6_5_schedule',
				day6: 'month6_6_schedule',
				day7: 'month6_7_schedule',
				day8: 'month6_8_schedule',
				day9: 'month6_9_schedule',
				day10: 'month6_10_schedule',
				day11: 'month6_11_schedule',
				day12: 'month6_12_schedule',
				day13: 'month6_13_schedule',
				day14: 'month6_14_schedule',
				day15: 'month6_15_schedule',
				day16: 'month6_16_schedule',
				day17: 'month6_17_schedule',
				day18: 'month6_18_schedule',
				day19: 'month6_19_schedule',
				day20: 'month6_20_schedule',
				day21: 'month6_21_schedule',
				day22: 'month6_22_schedule',
				day23: 'month6_23_schedule',
				day24: 'month6_24_schedule',
				day25: 'month6_25_schedule',
				day26: 'month6_26_schedule',
				day27: 'month6_27_schedule',
				day28: 'month6_28_schedule',
				day29: 'month6_29_schedule',
				day30: 'month6_30_schedule',
				day31: 'month6_31_schedule',
			},
			month7: {
				day1: 'month7_1_schedule',
				day2: 'month7_2_schedule',
				day3: 'month7_3_schedule',
				day4: 'month7_4_schedule',
				day5: 'month7_5_schedule',
				day6: 'month7_6_schedule',
				day7: 'month7_7_schedule',
				day8: 'month7_8_schedule',
				day9: 'month7_9_schedule',
				day10: 'month7_10_schedule',
				day11: 'month7_11_schedule',
				day12: 'month7_12_schedule',
				day13: 'month7_13_schedule',
				day14: 'month7_14_schedule',
				day15: 'month7_15_schedule',
				day16: 'month7_16_schedule',
				day17: 'month7_17_schedule',
				day18: 'month7_18_schedule',
				day19: 'month7_19_schedule',
				day20: 'month7_20_schedule',
				day21: 'month7_21_schedule',
				day22: 'month7_22_schedule',
				day23: 'month7_23_schedule',
				day24: 'month7_24_schedule',
				day25: 'month7_25_schedule',
				day26: 'month7_26_schedule',
				day27: 'month7_27_schedule',
				day28: 'month7_28_schedule',
				day29: 'month7_29_schedule',
				day30: 'month7_30_schedule',
				day31: 'month7_31_schedule',
			},
			month8: {
				day1: 'month8_1_schedule',
				day2: 'month8_2_schedule',
				day3: 'month8_3_schedule',
				day4: 'month8_4_schedule',
				day5: 'month8_5_schedule',
				day6: 'month8_6_schedule',
				day7: 'month8_7_schedule',
				day8: 'month8_8_schedule',
				day9: 'month8_9_schedule',
				day10: 'month8_10_schedule',
				day11: 'month8_11_schedule',
				day12: 'month8_12_schedule',
				day13: 'month8_13_schedule',
				day14: 'month8_14_schedule',
				day15: 'month8_15_schedule',
				day16: 'month8_16_schedule',
				day17: 'month8_17_schedule',
				day18: 'month8_18_schedule',
				day19: 'month8_19_schedule',
				day20: 'month8_20_schedule',
				day21: 'month8_21_schedule',
				day22: 'month8_22_schedule',
				day23: 'month8_23_schedule',
				day24: 'month8_24_schedule',
				day25: 'month8_25_schedule',
				day26: 'month8_26_schedule',
				day27: 'month8_27_schedule',
				day28: 'month8_28_schedule',
				day29: 'month8_29_schedule',
				day30: 'month8_30_schedule',
				day31: 'month8_31_schedule',
			},
			month9: {
				day1: 'month9_1_schedule',
				day2: 'month9_2_schedule',
				day3: 'month9_3_schedule',
				day4: 'month9_4_schedule',
				day5: 'month9_5_schedule',
				day6: 'month9_6_schedule',
				day7: 'month9_7_schedule',
				day8: 'month9_8_schedule',
				day9: 'month9_9_schedule',
				day10: 'month9_10_schedule',
				day11: 'month9_11_schedule',
				day12: 'month9_12_schedule',
				day13: 'month9_13_schedule',
				day14: 'month9_14_schedule',
				day15: 'month9_15_schedule',
				day16: 'month9_16_schedule',
				day17: 'month9_17_schedule',
				day18: 'month9_18_schedule',
				day19: 'month9_19_schedule',
				day20: 'month9_20_schedule',
				day21: 'month9_21_schedule',
				day22: 'month9_22_schedule',
				day23: 'month9_23_schedule',
				day24: 'month9_24_schedule',
				day25: 'month9_25_schedule',
				day26: 'month9_26_schedule',
				day27: 'month9_27_schedule',
				day28: 'month9_28_schedule',
				day29: 'month9_29_schedule',
				day30: 'month9_30_schedule',
				day31: 'month9_31_schedule',
			},
			month10: {
				day1: 'month10_1_schedule',
				day2: 'month10_2_schedule',
				day3: 'month10_3_schedule',
				day4: 'month10_4_schedule',
				day5: 'month10_5_schedule',
				day6: 'month10_6_schedule',
				day7: 'month10_7_schedule',
				day8: 'month10_8_schedule',
				day9: 'month10_9_schedule',
				day10: 'month10_10_schedule',
				day11: 'month10_11_schedule',
				day12: 'month10_12_schedule',
				day13: 'month10_13_schedule',
				day14: 'month10_14_schedule',
				day15: 'month10_15_schedule',
				day16: 'month10_16_schedule',
				day17: 'month10_17_schedule',
				day18: 'month10_18_schedule',
				day19: 'month10_19_schedule',
				day20: 'month10_20_schedule',
				day21: 'month10_21_schedule',
				day22: 'month10_22_schedule',
				day23: 'month10_23_schedule',
				day24: 'month10_24_schedule',
				day25: 'month10_25_schedule',
				day26: 'month10_26_schedule',
				day27: 'month10_27_schedule',
				day28: 'month10_28_schedule',
				day29: 'month10_29_schedule',
				day30: 'month10_30_schedule',
				day31: 'month10_31_schedule',
			},
			month11: {
				day1: 'month11_1_schedule',
				day2: 'month11_2_schedule',
				day3: 'month11_3_schedule',
				day4: 'month11_4_schedule',
				day5: 'month11_5_schedule',
				day6: 'month11_6_schedule',
				day7: 'month11_7_schedule',
				day8: 'month11_8_schedule',
				day9: 'month11_9_schedule',
				day10: 'month11_10_schedule',
				day11: 'month11_11_schedule',
				day12: 'month11_12_schedule',
				day13: 'month11_13_schedule',
				day14: 'month11_14_schedule',
				day15: 'month11_15_schedule',
				day16: 'month11_16_schedule',
				day17: 'month11_17_schedule',
				day18: 'month11_18_schedule',
				day19: 'month11_19_schedule',
				day20: 'month11_20_schedule',
				day21: 'month11_21_schedule',
				day22: 'month11_22_schedule',
				day23: 'month11_23_schedule',
				day24: 'month11_24_schedule',
				day25: 'month11_25_schedule',
				day26: 'month11_26_schedule',
				day27: 'month11_27_schedule',
				day28: 'month11_28_schedule',
				day29: 'month11_29_schedule',
				day30: 'month11_30_schedule',
				day31: 'month11_31_schedule',
			},
		},
		notes: {
			month0: {
				day1: 'month0_1_notes',
				day2: 'month0_2_notes',
				day3: 'month0_3_notes',
				day4: 'month0_4_notes',
				day5: 'month0_5_notes',
				day6: 'month0_6_notes',
				day7: 'month0_7_notes',
				day8: 'month0_8_notes',
				day9: 'month0_9_notes',
				day10: 'month0_10_notes',
				day11: 'month0_11_notes',
				day12: 'month0_12_notes',
				day13: 'month0_13_notes',
				day14: 'month0_14_notes',
				day15: 'month0_15_notes',
				day16: 'month0_16_notes',
				day17: 'month0_17_notes',
				day18: 'month0_18_notes',
				day19: 'month0_19_notes',
				day20: 'month0_20_notes',
				day21: 'month0_21_notes',
				day22: 'month0_22_notes',
				day23: 'month0_23_notes',
				day24: 'month0_24_notes',
				day25: 'month0_25_notes',
				day26: 'month0_26_notes',
				day27: 'month0_27_notes',
				day28: 'month0_28_notes',
				day29: 'month0_29_notes',
				day30: 'month0_30_notes',
				day31: 'month0_31_notes',
			},
			month1: {
				day1: 'month1_1_notes',
				day2: 'month1_2_notes',
				day3: 'month1_3_notes',
				day4: 'month1_4_notes',
				day5: 'month1_5_notes',
				day6: 'month1_6_notes',
				day7: 'month1_7_notes',
				day8: 'month1_8_notes',
				day9: 'month1_9_notes',
				day10: 'month1_10_notes',
				day11: 'month1_11_notes',
				day12: 'month1_12_notes',
				day13: 'month1_13_notes',
				day14: 'month1_14_notes',
				day15: 'month1_15_notes',
				day16: 'month1_16_notes',
				day17: 'month1_17_notes',
				day18: 'month1_18_notes',
				day19: 'month1_19_notes',
				day20: 'month1_20_notes',
				day21: 'month1_21_notes',
				day22: 'month1_22_notes',
				day23: 'month1_23_notes',
				day24: 'month1_24_notes',
				day25: 'month1_25_notes',
				day26: 'month1_26_notes',
				day27: 'month1_27_notes',
				day28: 'month1_28_notes',
				day29: 'month1_29_notes',
				day30: 'month1_30_notes',
				day31: 'month1_31_notes',
			},
			month2: {
				day1: 'month2_1_notes',
				day2: 'month2_2_notes',
				day3: 'month2_3_notes',
				day4: 'month2_4_notes',
				day5: 'month2_5_notes',
				day6: 'month2_6_notes',
				day7: 'month2_7_notes',
				day8: 'month2_8_notes',
				day9: 'month2_9_notes',
				day10: 'month2_10_notes',
				day11: 'month2_11_notes',
				day12: 'month2_12_notes',
				day13: 'month2_13_notes',
				day14: 'month2_14_notes',
				day15: 'month2_15_notes',
				day16: 'month2_16_notes',
				day17: 'month2_17_notes',
				day18: 'month2_18_notes',
				day19: 'month2_19_notes',
				day20: 'month2_20_notes',
				day21: 'month2_21_notes',
				day22: 'month2_22_notes',
				day23: 'month2_23_notes',
				day24: 'month2_24_notes',
				day25: 'month2_25_notes',
				day26: 'month2_26_notes',
				day27: 'month2_27_notes',
				day28: 'month2_28_notes',
				day29: 'month2_29_notes',
				day30: 'month2_30_notes',
				day31: 'month2_31_notes',
			},
			month3: {
				day1: 'month3_1_notes',
				day2: 'month3_2_notes',
				day3: 'month3_3_notes',
				day4: 'month3_4_notes',
				day5: 'month3_5_notes',
				day6: 'month3_6_notes',
				day7: 'month3_7_notes',
				day8: 'month3_8_notes',
				day9: 'month3_9_notes',
				day10: 'month3_10_notes',
				day11: 'month3_11_notes',
				day12: 'month3_12_notes',
				day13: 'month3_13_notes',
				day14: 'month3_14_notes',
				day15: 'month3_15_notes',
				day16: 'month3_16_notes',
				day17: 'month3_17_notes',
				day18: 'month3_18_notes',
				day19: 'month3_19_notes',
				day20: 'month3_20_notes',
				day21: 'month3_21_notes',
				day22: 'month3_22_notes',
				day23: 'month3_23_notes',
				day24: 'month3_24_notes',
				day25: 'month3_25_notes',
				day26: 'month3_26_notes',
				day27: 'month3_27_notes',
				day28: 'month3_28_notes',
				day29: 'month3_29_notes',
				day30: 'month3_30_notes',
				day31: 'month3_31_notes',
			},
			month4: {
				day1: 'month4_1_notes',
				day2: 'month4_2_notes',
				day3: 'month4_3_notes',
				day4: 'month4_4_notes',
				day5: 'month4_5_notes',
				day6: 'month4_6_notes',
				day7: 'month4_7_notes',
				day8: 'month4_8_notes',
				day9: 'month4_9_notes',
				day10: 'month4_10_notes',
				day11: 'month4_11_notes',
				day12: 'month4_12_notes',
				day13: 'month4_13_notes',
				day14: 'month4_14_notes',
				day15: 'month4_15_notes',
				day16: 'month4_16_notes',
				day17: 'month4_17_notes',
				day18: 'month4_18_notes',
				day19: 'month4_19_notes',
				day20: 'month4_20_notes',
				day21: 'month4_21_notes',
				day22: 'month4_22_notes',
				day23: 'month4_23_notes',
				day24: 'month4_24_notes',
				day25: 'month4_25_notes',
				day26: 'month4_26_notes',
				day27: 'month4_27_notes',
				day28: 'month4_28_notes',
				day29: 'month4_29_notes',
				day30: 'month4_30_notes',
				day31: 'month4_31_notes',
			},
			month5: {
				day1: 'month5_1_notes',
				day2: 'month5_2_notes',
				day3: 'month5_3_notes',
				day4: 'month5_4_notes',
				day5: 'month5_5_notes',
				day6: 'month5_6_notes',
				day7: 'month5_7_notes',
				day8: 'month5_8_notes',
				day9: 'month5_9_notes',
				day10: 'month5_10_notes',
				day11: 'month5_11_notes',
				day12: 'month5_12_notes',
				day13: 'month5_13_notes',
				day14: 'month5_14_notes',
				day15: 'month5_15_notes',
				day16: 'month5_16_notes',
				day17: 'month5_17_notes',
				day18: 'month5_18_notes',
				day19: 'month5_19_notes',
				day20: 'month5_20_notes',
				day21: 'month5_21_notes',
				day22: 'month5_22_notes',
				day23: 'month5_23_notes',
				day24: 'month5_24_notes',
				day25: 'month5_25_notes',
				day26: 'month5_26_notes',
				day27: 'month5_27_notes',
				day28: 'month5_28_notes',
				day29: 'month5_29_notes',
				day30: 'month5_30_notes',
				day31: 'month5_31_notes',
			},
			month6: {
				day1: 'month6_1_notes',
				day2: 'month6_2_notes',
				day3: 'month6_3_notes',
				day4: 'month6_4_notes',
				day5: 'month6_5_notes',
				day6: 'month6_6_notes',
				day7: 'month6_7_notes',
				day8: 'month6_8_notes',
				day9: 'month6_9_notes',
				day10: 'month6_10_notes',
				day11: 'month6_11_notes',
				day12: 'month6_12_notes',
				day13: 'month6_13_notes',
				day14: 'month6_14_notes',
				day15: 'month6_15_notes',
				day16: 'month6_16_notes',
				day17: 'month6_17_notes',
				day18: 'month6_18_notes',
				day19: 'month6_19_notes',
				day20: 'month6_20_notes',
				day21: 'month6_21_notes',
				day22: 'month6_22_notes',
				day23: 'month6_23_notes',
				day24: 'month6_24_notes',
				day25: 'month6_25_notes',
				day26: 'month6_26_notes',
				day27: 'month6_27_notes',
				day28: 'month6_28_notes',
				day29: 'month6_29_notes',
				day30: 'month6_30_notes',
				day31: 'month6_31_notes',
			},
			month7: {
				day1: 'month7_1_notes',
				day2: 'month7_2_notes',
				day3: 'month7_3_notes',
				day4: 'month7_4_notes',
				day5: 'month7_5_notes',
				day6: 'month7_6_notes',
				day7: 'month7_7_notes',
				day8: 'month7_8_notes',
				day9: 'month7_9_notes',
				day10: 'month7_10_notes',
				day11: 'month7_11_notes',
				day12: 'month7_12_notes',
				day13: 'month7_13_notes',
				day14: 'month7_14_notes',
				day15: 'month7_15_notes',
				day16: 'month7_16_notes',
				day17: 'month7_17_notes',
				day18: 'month7_18_notes',
				day19: 'month7_19_notes',
				day20: 'month7_20_notes',
				day21: 'month7_21_notes',
				day22: 'month7_22_notes',
				day23: 'month7_23_notes',
				day24: 'month7_24_notes',
				day25: 'month7_25_notes',
				day26: 'month7_26_notes',
				day27: 'month7_27_notes',
				day28: 'month7_28_notes',
				day29: 'month7_29_notes',
				day30: 'month7_30_notes',
				day31: 'month7_31_notes',
			},
			month8: {
				day1: 'month8_1_notes',
				day2: 'month8_2_notes',
				day3: 'month8_3_notes',
				day4: 'month8_4_notes',
				day5: 'month8_5_notes',
				day6: 'month8_6_notes',
				day7: 'month8_7_notes',
				day8: 'month8_8_notes',
				day9: 'month8_9_notes',
				day10: 'month8_10_notes',
				day11: 'month8_11_notes',
				day12: 'month8_12_notes',
				day13: 'month8_13_notes',
				day14: 'month8_14_notes',
				day15: 'month8_15_notes',
				day16: 'month8_16_notes',
				day17: 'month8_17_notes',
				day18: 'month8_18_notes',
				day19: 'month8_19_notes',
				day20: 'month8_20_notes',
				day21: 'month8_21_notes',
				day22: 'month8_22_notes',
				day23: 'month8_23_notes',
				day24: 'month8_24_notes',
				day25: 'month8_25_notes',
				day26: 'month8_26_notes',
				day27: 'month8_27_notes',
				day28: 'month8_28_notes',
				day29: 'month8_29_notes',
				day30: 'month8_30_notes',
				day31: 'month8_31_notes',
			},
			month9: {
				day1: 'month9_1_notes',
				day2: 'month9_2_notes',
				day3: 'month9_3_notes',
				day4: 'month9_4_notes',
				day5: 'month9_5_notes',
				day6: 'month9_6_notes',
				day7: 'month9_7_notes',
				day8: 'month9_8_notes',
				day9: 'month9_9_notes',
				day10: 'month9_10_notes',
				day11: 'month9_11_notes',
				day12: 'month9_12_notes',
				day13: 'month9_13_notes',
				day14: 'month9_14_notes',
				day15: 'month9_15_notes',
				day16: 'month9_16_notes',
				day17: 'month9_17_notes',
				day18: 'month9_18_notes',
				day19: 'month9_19_notes',
				day20: 'month9_20_notes',
				day21: 'month9_21_notes',
				day22: 'month9_22_notes',
				day23: 'month9_23_notes',
				day24: 'month9_24_notes',
				day25: 'month9_25_notes',
				day26: 'month9_26_notes',
				day27: 'month9_27_notes',
				day28: 'month9_28_notes',
				day29: 'month9_29_notes',
				day30: 'month9_30_notes',
				day31: 'month9_31_notes',
			},
			month10: {
				day1: 'month10_1_notes',
				day2: 'month10_2_notes',
				day3: 'month10_3_notes',
				day4: 'month10_4_notes',
				day5: 'month10_5_notes',
				day6: 'month10_6_notes',
				day7: 'month10_7_notes',
				day8: 'month10_8_notes',
				day9: 'month10_9_notes',
				day10: 'month10_10_notes',
				day11: 'month10_11_notes',
				day12: 'month10_12_notes',
				day13: 'month10_13_notes',
				day14: 'month10_14_notes',
				day15: 'month10_15_notes',
				day16: 'month10_16_notes',
				day17: 'month10_17_notes',
				day18: 'month10_18_notes',
				day19: 'month10_19_notes',
				day20: 'month10_20_notes',
				day21: 'month10_21_notes',
				day22: 'month10_22_notes',
				day23: 'month10_23_notes',
				day24: 'month10_24_notes',
				day25: 'month10_25_notes',
				day26: 'month10_26_notes',
				day27: 'month10_27_notes',
				day28: 'month10_28_notes',
				day29: 'month10_29_notes',
				day30: 'month10_30_notes',
				day31: 'month10_31_notes',
			},
			month11: {
				day1: 'month11_1_notes',
				day2: 'month11_2_notes',
				day3: 'month11_3_notes',
				day4: 'month11_4_notes',
				day5: 'month11_5_notes',
				day6: 'month11_6_notes',
				day7: 'month11_7_notes',
				day8: 'month11_8_notes',
				day9: 'month11_9_notes',
				day10: 'month11_10_notes',
				day11: 'month11_11_notes',
				day12: 'month11_12_notes',
				day13: 'month11_13_notes',
				day14: 'month11_14_notes',
				day15: 'month11_15_notes',
				day16: 'month11_16_notes',
				day17: 'month11_17_notes',
				day18: 'month11_18_notes',
				day19: 'month11_19_notes',
				day20: 'month11_20_notes',
				day21: 'month11_21_notes',
				day22: 'month11_22_notes',
				day23: 'month11_23_notes',
				day24: 'month11_24_notes',
				day25: 'month11_25_notes',
				day26: 'month11_26_notes',
				day27: 'month11_27_notes',
				day28: 'month11_28_notes',
				day29: 'month11_29_notes',
				day30: 'month11_30_notes',
				day31: 'month11_31_notes',
			},
		},
	},
};

// === Settings
