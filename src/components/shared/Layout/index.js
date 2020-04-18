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
        margin: '0 auto',
        maxWidth: 960,
        width: '100%',
        flex: 1
      }}
    >
      {children}
    </main>
    <Footer />
  </Fragment>
)

export default Layout
