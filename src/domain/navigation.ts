import { anchorsKeys } from '../constants/config';
import { AnchorDayTypes, AnchorMonthTypes } from '../types/common';

type AnchorIdType = 'cover' | 'calendar' | 'month' | 'day' | 'daySchedule' | 'dayNotes';

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
