import { ThemeProvider, Global } from '@emotion/react'
import { theme } from './styles/theme'
import { globalStyles } from './styles/globalStyles'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles(theme)} />
        <Nav />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
