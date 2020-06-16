import React from 'react'
import Head from 'next/head'
import GlobalStyle from 'src/styles/Globalstyle'

export default function Home(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p
          style={{
            padding: '100px',
            fontSize: 60,
            fontWeight: 900,
            color: '#222',
          }}
        >
          하나 계절이 옥 보고, 거외다. 강아지, 헤는 별 계집애들의 위에 때 덮어 쓸쓸함과 어머니 거외다. 소학교 된 나의
          어머님, 별 내린 노새, 거외다.
        </p>
      </main>
    </>
  )
}
