import moment from 'moment'

export function formatTime(hour: number, minute?: number): string {
  const ampm = hour <= 12 ? 'am' : 'pm'
  const hours = hour % 12 === 0 ? `${hour}` : `${hour % 12}`.padStart(2, '0')
  const minutes = minute ? `${minute}`.padStart(2, '0') : '00'
  const expression = hours === '12' ? 'noon' : `${hours}:${minutes}${ampm}`
  return expression
}

export function getCurrentFormatTime(date: Date): string {
  const current = moment(date)
  return formatTime(current.hour(), current.minute())
}
