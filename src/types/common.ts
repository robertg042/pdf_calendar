import { DayPageType } from "./page";

export type Locales = 'en';

export interface ObjectLiteral {
  [key: string]: any;
}

export type DayPageTypeKeyObject = {
  [key in DayPageType]: MonthsAnchorKeyObject;
}

export type MonthsAnchorKeyObject = {
  [key in AnchorMonthTypes]: DaysAnchorKeyObject;
}

export type DaysAnchorKeyObject = {
  [key in AnchorDayTypes]: string;
}

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
	| 'month0'
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
