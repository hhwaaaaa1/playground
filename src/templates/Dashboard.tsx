import React from 'react'
import { GridTemplate } from 'src/components/atoms/Grid'

interface DashboardProps {
  children?: React.ReactNode
}

function Dashboard({ children }: DashboardProps): JSX.Element {
  return <GridTemplate columns={2}>{children}</GridTemplate>
}

export default Dashboard
