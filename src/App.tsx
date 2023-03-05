import { queryClient } from '@libs/queryClient'
import { MainPage } from '@pages/MainPage'
import { theme } from '@styles/core/theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage />
    </ThemeProvider>
  </QueryClientProvider>
)
