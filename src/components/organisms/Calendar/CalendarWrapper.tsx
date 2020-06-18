import React from 'react'

interface CalendarWrapperProps {
  children?: React.ReactNode
}

function CalendarWrapper({ children }: CalendarWrapperProps): JSX.Element {
  return <div>{children}</div>
}

export default CalendarWrapper
