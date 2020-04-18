/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../shared/Layout'
import SEO from '../shared/SEO'

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <h1 sx={{ px: [4, 6] }}>Hello World</h1>
  </Layout>
)

export default Index
