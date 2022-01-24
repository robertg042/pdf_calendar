import { anchorsKeys } from '../constants/config';
import { AnchorDayTypes, AnchorMonthTypes } from '../types/common';

type AnchorIdType = 'cover' | 'calendar' | 'month' | 'day' | 'daySchedule' | 'dayNotes';

export const replaceDigitsWithWords = (str: string) => {
	let replaced = str.replace(/0/g, 'zero');
	replaced = replaced.replace(/1/g, 'one');
	replaced = replaced.replace(/2/g, 'two');
	replaced = replaced.replace(/3/g, 'three');
	replaced = replaced.replace(/4/g, 'four');
	replaced = replaced.replace(/5/g, 'five');
	replaced = replaced.replace(/6/g, 'six');
	replaced = replaced.replace(/7/g, 'seven');
	replaced = replaced.replace(/8/g, 'eight');
	replaced = replaced.replace(/9/g, 'nine');

	return replaced;
}

export const getAnchorId = (type: AnchorIdType, monthIndex?: number, dayIndex?: number) => {
	if (type === 'cover') {
		return anchorsKeys.cover;
	} else if (type === 'calendar') {
		return anchorsKeys.calendar;
	} else if (type === 'month' && monthIndex !== undefined) {
		return anchorsKeys.month[`month${String(monthIndex)}` as AnchorMonthTypes];
	} else if (type === 'day') {
		return anchorsKeys.day.default[`month${String(monthIndex)}` as AnchorMonthTypes][
			`day${String(dayIndex)}` as AnchorDayTypes
		];
	} else if (type === 'daySchedule') {
		return anchorsKeys.day.schedule[`month${String(monthIndex)}` as AnchorMonthTypes][
			`day${String(dayIndex)}` as AnchorDayTypes
		];
	} else if (type === 'dayNotes') {
		return anchorsKeys.day.notes[`month${String(monthIndex)}` as AnchorMonthTypes][
			`day${String(dayIndex)}` as AnchorDayTypes
		];
	}
};
