import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import dynamic from 'next/dynamic'

const PostHogAnalytics = dynamic(
  async () => await import('./posthog-analytics'),
  { ssr: false },
)

const Analytics = () => (
  <>
    <GoogleTagManager gtmId="GTM-MPZN38ZN" />
    <PostHogAnalytics />
    {/* <HighlightInit
      projectId="qe9lo2pe"
      serviceName={config.siteShortname}
      tracingOrigins
      networkRecording={{
        enabled: true,
        recordHeadersAndBody: true,
        urlBlocklist: [],
      }}
    /> */}
    <VercelAnalytics />
  </>
)

export default Analytics
