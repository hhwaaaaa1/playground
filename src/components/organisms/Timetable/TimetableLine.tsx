import React from 'react'

interface TimetableLineProps {
  text: string
}

function TimetableLine({ text }: TimetableLineProps): JSX.Element {
  return (
    <div>
      {text}
      <hr />
    </div>
  )
}

export default TimetableLine
