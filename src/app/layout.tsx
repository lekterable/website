/* eslint-disable @next/next/no-page-custom-font */

import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { SiteFooter, SiteHeader, ThemeProvider } from '~components'
import { siteConfig } from '~config/site'

export const metadata: Metadata = {
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.author,
  description: siteConfig.description,
  icons: {
    apple: '/apple-touch-icon.png',
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
  },
  keywords: ['Linky', 'LinkedIn', 'Helper', 'Post', 'Tool'],
  manifest: '/site.webmanifest',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: siteConfig.ogImage,
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: 'website',
    url: siteConfig.url,
  },
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: 'summary_large_image',
    creator: `@${siteConfig.author}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    title: siteConfig.name,
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
      <Analytics />
    </body>
  </html>
)

export default RootLayout
