import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import PostHogAnalytics from './posthog-analytics'

const Analytics = () => (
  <>
    <GoogleTagManager gtmId="GTM-MPZN38ZN" />
    <PostHogAnalytics />
    <VercelAnalytics />
  </>
)

export default Analytics
