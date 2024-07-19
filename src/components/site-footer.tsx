'use client'

import clientConfig from '~config/client'

const SiteFooter = (): JSX.Element => (
  <footer className="bg-primary py-[7px]">
    <p className="text-center text-sm text-secondary">
      © {new Date().getFullYear()} Made with ❤️ by{' '}
      <a
        href={clientConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className="font-medium underline underline-offset-2"
      >
        {clientConfig.author}
      </a>
    </p>
  </footer>
)

export default SiteFooter
