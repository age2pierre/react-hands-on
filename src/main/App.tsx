import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { teal } from '@material-ui/core/colors'
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppLayout } from './AppLayout'
import { MdxComponentMapping } from './MdxComponentMapping'
import { PageNavMenu, PageRouter } from './routes'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: teal[400],
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    allVariants: {
      lineHeight: 1.5,
    },
  },
})

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MDXProvider components={MdxComponentMapping}>
          <AppLayout
            drawerContent={<PageNavMenu />}
            mainContent={<PageRouter />}
          />
        </MDXProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
