import React from 'react'
import Head from 'next/head'
import GlobalStyle from 'src/styles/Globalstyle'
import Dashboard from 'src/templates/Dashboard'
import Calendar from 'src/components/organisms/Calendar/Calendar'
import Timetable from 'src/components/organisms/Timetable/Timetable'

export default function Home(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Dashboard>
          <Calendar />
          <Timetable />
        </Dashboard>
      </main>
    </>
  )
}
