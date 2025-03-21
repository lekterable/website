'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PostHogProviderBase } from 'posthog-js/react'
import type { PropsWithChildren } from 'react'
import ThemeProviderBase from '~components/theme-provider'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
  })
}

const PostHogProvider = ({ children }: PropsWithChildren) => (
  <PostHogProviderBase client={posthog}>{children}</PostHogProviderBase>
)

const ThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProviderBase
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProviderBase>
)

const Providers = ({ children }: PropsWithChildren) => (
  <>
    <PostHogProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </PostHogProvider>
  </>
)

export default Providers
