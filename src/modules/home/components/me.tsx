'use client'

import { motion } from 'framer-motion'
import Github from '~assets/github.svg'
import LinkedIn from '~assets/linkedin.svg'
import SeparatorBoth from '~assets/separator-both.svg'
import SeparatorRight from '~assets/separator-right.svg'
import Youtube from '~assets/youtube.svg'
import clientConfig from '~config/client'

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const Me = () => (
  <motion.div
    variants={variants}
    className="flex flex-1 flex-col items-center lg:items-start"
  >
    <h1 className="text-center text-[55px] text-secondary md:text-[89px] lg:text-left">
      Kornel Dubieniecki
    </h1>
    <SeparatorRight className="hidden max-w-[322px] text-accent md:max-w-[377px] lg:block" />
    <SeparatorBoth className="w-[189px] text-accent md:w-[377px] lg:hidden" />
    <div className="mb-[29px] mt-[21px] flex items-center gap-[18px] md:gap-[21px]">
      <a
        href={clientConfig.links.github}
        aria-label="Visit Kornel Dubieniecki's portfolio"
        title="Visit Kornel Dubieniecki's portfolio"
        target="_blank"
        rel="noopener"
      >
        <Github className="w-[34px] hover:text-accent md:w-[47px]" />
      </a>
      <a
        href={clientConfig.links.linkedin}
        aria-label="Visit Kornel Dubieniecki's LinkedIn"
        title="Visit Kornel Dubieniecki's LinkedIn"
        target="_blank"
        rel="noopener"
      >
        <LinkedIn className="w-[34px] hover:text-accent md:w-[47px]" />
      </a>
      <a
        href={clientConfig.links.youtube}
        aria-label="Visit Kornel Dubieniecki's YouTube"
        title="Visit Kornel Dubieniecki's YouTube"
        target="_blank"
        rel="noopener"
      >
        <Youtube className="w-[34px] hover:text-accent md:w-[47px]" />
      </a>
    </div>
    <div className="max-w-[377px] space-y-[18px] text-center text-lg tracking-wide md:max-w-[521px] md:text-xl lg:text-left">
      <p>
        Software engineer with{' '}
        <span className="text-accent">
          +{new Date().getFullYear() - 2018}yrs
        </span>{' '}
        of experience.
      </p>
      <p>
        Worked in companies of all sizes from{' '}
        <span className="text-accent">big corps</span>, through{' '}
        <span className="text-accent">scale-ups</span> to early stage{' '}
        <span className="text-accent">start-ups</span>.
      </p>
      <p>
        Created <span className="text-accent">web</span> and{' '}
        <span className="text-accent">mobile</span> apps.
      </p>
      <p>
        Led <span className="text-accent">teams</span> and{' '}
        <span className="text-accent">solo</span> started new projects.
      </p>
      <p>
        I do all the <span className="text-accent">tech</span> so that you can
        focus on <span className="text-accent">business</span>.
      </p>
      <p>
        Reach out if I can <span className="text-accent">help</span> you in any
        way!
      </p>
    </div>
  </motion.div>
)

export default Me
