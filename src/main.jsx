import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
