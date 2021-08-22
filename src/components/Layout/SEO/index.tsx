import Head from 'next/head'
import React from 'react'
import metadata from './metadata'

const SEO = () => (
  <Head>
    <title>{metadata.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={metadata.description} />
    <meta name="og:title" content={metadata.title} />
    <meta name="og:description" content={metadata.description} />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={metadata.author} />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
  </Head>
)

export default SEO
