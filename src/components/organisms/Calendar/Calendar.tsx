import React from 'react'
import CalendarWrapper from './CalendarWrapper'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import CalendarBodyCell from './CalendarCell'
import { getYearOf, getMonthOf, getDayFromThisWeek } from './calendarHelper'

const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function Calendar(): JSX.Element {
  const now = new Date()
  const thisYear = getYearOf(now)
  const thisMonth = getMonthOf(now)
  // const thisDate = getDateOf(now)
  const days = Array.from({ length: 35 }, (value, index) => getDayFromThisWeek(index))

  return (
    <>
      <CalendarWrapper>
        <CalendarHeader>{`${thisYear}.${thisMonth}`}</CalendarHeader>
        <CalendarBody>
          {weekdays.map(weekday => (
            <CalendarBodyCell key={weekday}>{weekday}</CalendarBodyCell>
          ))}
          {days.map(({ date, month }, index) => (
            <CalendarBodyCell key={index}>
              {month !== thisMonth && date === 1 && `${month} /`}
              {date}
            </CalendarBodyCell>
          ))}
        </CalendarBody>
      </CalendarWrapper>
    </>
  )
}

export default Calendar
