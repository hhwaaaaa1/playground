import React from 'react'

interface TimetableCurrentProps {
  time: string
}

function TimetableCurrent({ time }: TimetableCurrentProps): JSX.Element {
  return (
    <div>
      <div>{time}</div>
      <hr />
    </div>
  )
}

export default TimetableCurrent
