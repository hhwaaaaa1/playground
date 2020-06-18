import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600&display=swap');

  html {
    color: #222;
    font: 14px/1.4 'Titillium Web', 'Noto Sans KR', sans-serif;
    /* letter-spacing: -0.0625em; */
    font-weight: 200;
    word-break: keep-all;
    text-rendering: optimizeLegibility;
    -webkit-font-smooth: antialiased;
    overflow-wrap: break-word;
    touch-action: manipulation;
  }

  body {
    margin: 0;
  }

  p,
  hr {
    margin: 0;
  }
`

export default GlobalStyle
