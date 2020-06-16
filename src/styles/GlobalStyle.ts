import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  html {
    font: 14px/1.4 'Noto Sans KR', sans-serif;
    letter-spacing: -0.0625em;
    word-break: keep-all;
    text-rendering: optimizeLegibility;
    -webkit-font-smooth: antialiased;
    overflow-wrap: break-word;
    touch-action: manipulation;
  }

  body {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default GlobalStyle
