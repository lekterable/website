import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
// import { HighlightInit } from '@highlight-run/next/client'
// import config from '~config/server'

const Analytics = () => (
  <>
    <GoogleTagManager gtmId="GTM-MPZN38ZN" />
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
