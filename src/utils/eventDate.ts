export function isSameCalendarDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/**
 * Returns the next occurrence of `month`/`day` at midnight: this year if it
 * hasn't happened yet (or is today), otherwise next year. Recomputing this
 * on every tick is what lets a countdown roll over to next year on its own.
 */
export function getNextOccurrence(
  month: number,
  day: number,
  from: Date = new Date()
): Date {
  const startOfToday = new Date(
    from.getFullYear(),
    from.getMonth(),
    from.getDate()
  );
  const thisYear = new Date(from.getFullYear(), month - 1, day);

  return thisYear >= startOfToday
    ? thisYear
    : new Date(from.getFullYear() + 1, month - 1, day);
}

export function isEventToday(
  month: number,
  day: number,
  now: Date = new Date()
): boolean {
  return now.getMonth() === month - 1 && now.getDate() === day;
}
