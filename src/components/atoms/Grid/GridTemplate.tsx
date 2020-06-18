import React from 'react'
import styled from 'styled-components'

interface GridTemplateProps {
  rows?: number
  columns?: number
  children?: React.ReactNode
}

function GridTemplate({ rows, columns, children }: GridTemplateProps): JSX.Element {
  return (
    <Template rows={rows} columns={columns}>
      {children}
    </Template>
  )
}

GridTemplate.defaultProps = {
  rows: 1,
  columns: 1,
}

const Template = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
`

export default GridTemplate
