import dayjs from "dayjs";
import isLeapYear from 'dayjs/plugin/isLeapYear';
import { YEAR } from "../constants/config";
dayjs.extend(isLeapYear);

export const daysInYear = dayjs(new Date(YEAR, 0)).isLeapYear() ? 366 : 365;
