import FloatingNav from './floating-nav'
import TopNav from './top-nav'
// import ThemeToggle from './theme-toggle'

const SiteHeader = (): JSX.Element => (
  <header>
    <TopNav />
    <FloatingNav />
  </header>
)

export default SiteHeader
