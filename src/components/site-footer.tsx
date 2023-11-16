'use client'

import { siteConfig } from '~config/site'

const SiteFooter = (): JSX.Element => (
  <footer className="bg-primary py-[3px]">
    <p className="text-center text-[18px] font-bold text-secondary">
      © 2023 Made with ❤️ by{' '}
      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className="font-medium underline underline-offset-2"
      >
        {siteConfig.author}
      </a>
    </p>
  </footer>
)

export default SiteFooter
