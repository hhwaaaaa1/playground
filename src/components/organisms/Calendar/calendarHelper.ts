import moment from 'moment'

export function getDateOf(date: Date): number {
  return moment(date).get('date')
}

export function getMonthOf(date: Date): number {
  return moment(date).get('month')
}

export function getYearOf(date: Date): number {
  return moment(date).get('year')
}

export function getDayFromThisWeek(index: number): { date: number; month: number; year: number } {
  const day = moment().day(index)
  return { date: day.date(), month: day.month(), year: day.year() }
}
