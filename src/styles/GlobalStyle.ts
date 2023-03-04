import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  html {
    background-color: rgb(19, 26, 42);
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }

  button {
    &:disabled {
      cursor: default;
    }
  }
`
