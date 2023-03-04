import { MainPage } from '@pages/MainPage'
import { theme } from '@styles/core/theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainPage />
  </ThemeProvider>
)
