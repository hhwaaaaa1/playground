import React from 'react'

interface CalendarBodyProps {
  children?: React.ReactNode
}

function CalendarBody({ children }: CalendarBodyProps): JSX.Element {
  return <div>{children}</div>
}

export default CalendarBody
