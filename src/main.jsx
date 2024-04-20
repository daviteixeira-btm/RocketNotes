import React from 'react'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'
import { New } from './pages/New'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>,
)
