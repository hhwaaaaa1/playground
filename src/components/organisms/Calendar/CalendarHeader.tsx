import React from 'react'

interface CalendarHeaderProps {
  children?: React.ReactNode
}

function CalendarHeader({ children }: CalendarHeaderProps): JSX.Element {
  return <div>{children}</div>
}

export default CalendarHeader
