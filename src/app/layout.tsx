/* eslint-disable @next/next/no-page-custom-font */

import './globals.css'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Analytics, SiteFooter, SiteHeader, ThemeProvider } from '~components'
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
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
  title: {
    default: clientConfig.name,
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

type Props = PropsWithChildren<unknown>

const RootLayout = ({ children }: Props): JSX.Element => (
  <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Akronim&family=Amatic+SC:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body
      className={
        "bg-background font-['Amatic_SC'] text-[18px] antialiased md:text-[21px] lg:text-[29px]"
      }
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative flex flex-col">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </ThemeProvider>
      {clientConfig.env === 'production' && <Analytics />}
    </body>
  </html>
)

export default RootLayout
