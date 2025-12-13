import { ThemeProvider, Global } from '@emotion/react'
import { theme } from './styles/theme'
import { globalStyles } from './styles/globalStyles'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles(theme)} />
        <Nav />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
