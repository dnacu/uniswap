import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

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
