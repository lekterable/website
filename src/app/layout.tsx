/* eslint-disable @next/next/no-page-custom-font */

import './globals.css'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Analytics, SiteFooter, SiteHeader, ThemeProvider } from '~components'
import fonts from './fonts'
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
  viewport: 'width=device-width, initial-scale=1',
}

type Props = PropsWithChildren<unknown>

const RootLayout = ({ children }: Props): JSX.Element => (
  <html lang="en" suppressHydrationWarning>
    <body className={fonts}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative flex flex-col">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </ThemeProvider>
      {clientConfig.env === 'production' && <Analytics />}
    </body>
  </html>
)

export default RootLayout
