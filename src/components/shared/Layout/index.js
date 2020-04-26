/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'
import Header from './Header'

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <main
      sx={{
        width: '100%'
      }}
    >
      {children}
    </main>
    <Footer />
  </Fragment>
)

export default Layout
