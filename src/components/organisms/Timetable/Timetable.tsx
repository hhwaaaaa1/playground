import React, { useState } from 'react'
import useInterval from 'src/hooks/useInterval'
import TimetableCell from './TimetableCell'
import TimetableLine from './TimetableLine'
import TimetableCurrent from './TimetableCurrent'
import { formatTime, getCurrentFormatTime } from './timetableHelper'

const times = Array.from({ length: 24 }, (value, index) => formatTime(index + 1))

function Timetable(): JSX.Element {
  const [currentTime, setCurrentTime] = useState('')

  useInterval(() => setCurrentTime(getCurrentFormatTime(new Date())), 1000)

  return (
    <div>
      {times.map(time => (
        <>
          <TimetableCell key={time}></TimetableCell>
          <TimetableLine text={time} />
        </>
      ))}
      <TimetableCurrent time={currentTime} />
    </div>
  )
}

export default Timetable
