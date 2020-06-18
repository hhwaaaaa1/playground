import React from 'react'
import styled from 'styled-components'

interface CalendarCellProps {
  marked?: boolean
  blurred?: boolean
  children?: React.ReactNode
}

function CalendarCell({ children }: CalendarCellProps): JSX.Element {
  return <Cell>{children}</Cell>
}

const Cell = styled.div`
  display: inline-block;
  padding: 20px;
`

export default CalendarCell
