export const WEEKDAY_LETTERS = ["S", "M", "T", "W", "T", "F", "S"];

export const WEEKDAY_ABBR = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const WEEKDAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type CalendarCell = {
  date: Date;
  day: number;
  inMonth: boolean;
  isToday: boolean;
  isWeekend: boolean;
};

export const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

export const daysInYear = (year: number): number =>
  isLeapYear(year) ? 366 : 365;

export const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86_400_000);
};

/**
 * 6 weeks (42 cells) of the month grid, Sunday-first, with leading/trailing
 * days from adjacent months so the grid is always rectangular.
 */
export const getMonthCells = (
  year: number,
  month: number,
  today: Date = new Date(),
): CalendarCell[] => {
  const startDow = new Date(year, month, 1).getDay();
  const cells: CalendarCell[] = [];

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(year, month, 1 - startDow + i);
    const dow = date.getDay();
    cells.push({
      date,
      day: date.getDate(),
      inMonth: date.getMonth() === month,
      isToday: isSameDay(date, today),
      isWeekend: dow === 0 || dow === 6,
    });
  }

  return cells;
};

/** Number of week-rows the month actually spans (5 or 6). */
export const weeksInMonth = (year: number, month: number): number => {
  const startDow = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  return Math.ceil((startDow + totalDays) / 7);
};
