'use client'

import clientConfig from '~config/client'

const SiteFooter = () => (
  <footer className="bg-primary py-[7px]">
    <p className="text-center text-sm text-secondary">
      © {new Date().getFullYear()} Made with ❤️ by{' '}
      <a
        href={clientConfig.links.footer}
        aria-label="Visit Kornel Dubieniecki's portfolio"
        title="Visit Kornel Dubieniecki's portfolio"
        target="_blank"
        rel="noopener"
        className="font-medium underline underline-offset-2"
      >
        {clientConfig.author}
      </a>
    </p>
  </footer>
)

export default SiteFooter
