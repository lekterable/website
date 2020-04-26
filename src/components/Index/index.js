/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../shared/Layout'
import SEO from '../shared/SEO'
import Hero from './Hero'

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default Index
