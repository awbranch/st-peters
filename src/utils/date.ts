export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Returns the UTC date in YYYY-MM-DD format
 */
export function toDate(utcDate: Date) {
  const yyyy = utcDate.getUTCFullYear();
  const mm = ('0' + (utcDate.getUTCMonth() + 1)).slice(-2);
  const dd = ('0' + utcDate.getUTCDate()).slice(-2);
  return `${yyyy}-${mm}-${dd}`;
}

export function toUTCDate(date: string): Date {
  return new Date(date + 'T00:00:00Z');
}

export function getNow() {
  return toDate(new Date());
}

/**
 * Adds days to a YYYY-MM-DD date
 */
export function addDays(date: string, days: number) {
  return toDate(
    new Date(toUTCDate(date).getTime() + days * 24 * 60 * 60 * 1000),
  );
}

export function getWeekday(date: string) {
  const day = toUTCDate(date).getUTCDay();
  return days[day];
}

export function isWeekday(date: string) {
  const day = toUTCDate(date).getUTCDay();
  return day > 0 && day < 6;
}

export function getNextWeekdayDate(date: string) {
  do {
    date = addDays(date, 1);
  } while (!isWeekday(date));
  return date;
}

export function toMonthAndDate(date: string) {
  const d = toUTCDate(date);
  const month = months[d.getUTCMonth()];
  const day = d.getUTCDate();
  return `${month} ${day}`;
}

export function toFullDate(date: string) {
  const d = toUTCDate(date);
  const weekday = getWeekday(date);
  const month = months[d.getUTCMonth()];
  const day = d.getUTCDate();
  const year = d.getUTCFullYear();
  return `${weekday}, ${month} ${day}, ${year}`;
}
