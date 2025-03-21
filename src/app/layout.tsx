import './globals.css'
import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'
import { Analytics, SiteFooter, SiteHeader } from '~components'
import fonts from './fonts'
import Providers from './providers'
import clientConfig from '~config/client'

export const metadata: Metadata = {
  authors: [
    {
      name: clientConfig.author,
      url: clientConfig.links.github,
    },
  ],
  creator: clientConfig.author,
  description: clientConfig.description,
  keywords: clientConfig.keywords,
  manifest: '/site.webmanifest',
  metadataBase: new URL(clientConfig.url),
  openGraph: {
    description: clientConfig.description,
    locale: 'en_US',
    siteName: clientConfig.name,
    title: clientConfig.name,
    type: 'website',
  },
  title: {
    default: `${clientConfig.name} | ${clientConfig.description}`,
    template: `%s | ${clientConfig.name}`,
  },
  twitter: {
    card: 'summary_large_image',
    creator: `@${clientConfig.author}`,
    description: clientConfig.description,
    images: [clientConfig.ogImage],
    title: clientConfig.name,
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <body className={fonts}>
      <Providers>
        <div className="relative flex flex-col">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        {clientConfig.env === 'production' && <Analytics />}
      </Providers>
    </body>
  </html>
)

export default RootLayout
