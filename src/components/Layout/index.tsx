import { ReactElement } from 'react'
import SEO from './SEO'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: ReactElement }) => (
  <>
    <SEO />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
