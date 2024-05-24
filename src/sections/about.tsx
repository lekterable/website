'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AboutIMG from '~assets/about.png'
import Github from '~assets/github.svg'
import IBM_IMG from '~assets/ibm.png'
import LinkedIn from '~assets/linkedin.svg'
import MacromoIMG from '~assets/macromo.jpeg'
import OutreachIMG from '~assets/outreach.jpeg'
import SeparatorRight from '~assets/separator-right.svg'
import STRV_IMG from '~assets/strv.png'
import TimelineDot from '~assets/timeline-dot.svg'
import Timeline from '~assets/timeline.svg'
import Youtube from '~assets/youtube.svg'
import clientConfig from '~config/client'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: 1,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const About = () => (
  <section
    id="about"
    className="bg-primary px-[34px] py-[89px] text-secondary xs:px-[55px] md:p-[89px] xl:p-[144px]"
  >
    <motion.div
      variants={container}
      initial="hidden"
      // animate="show"
      // initial={{ opacity: 0 }}
      whileInView="show"
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center lg:flex-row"
    >
      <motion.div
        // variants={item}
        className="mb-[29px] flex justify-center md:mb-[34px] lg:mr-[34px] xl:mr-[89px]"
      >
        <Image
          src={AboutIMG}
          alt="about image"
          className="h-[322px] w-auto md:h-[377px] lg:h-[521px] xl:h-[521px]"
        />
      </motion.div>
      <div>
        <motion.div
          variants={item}
          className="flex max-w-[843px] flex-1 flex-col items-center lg:items-start"
        >
          <h1 className="mb-[7px] text-center font-['Akronim'] text-[55px] leading-none md:text-[89px] lg:text-left">
            Kornel Dubieniecki
          </h1>
          <SeparatorRight className="mb-[21px] max-w-[322px] text-accent md:max-w-[377px]" />
          <div className="mb-[21px] flex items-center gap-[18px] md:gap-[21px]">
            <a
              href={clientConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-[34px] hover:text-accent md:w-[47px]" />
            </a>
            <a
              href={clientConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="w-[34px] hover:text-accent md:w-[47px]" />
            </a>
            <a
              href={clientConfig.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-[34px] hover:text-accent md:w-[47px]" />
            </a>
          </div>
          <div className="max-w-[377px] space-y-[18px] text-center text-[21px] font-bold tracking-wide md:max-w-[521px] md:text-[29px] lg:text-left">
            <p>
              software engineer with{' '}
              <span className="text-accent">
                +{new Date().getFullYear() - 2018}yrs
              </span>{' '}
              of experience
            </p>
            <p>
              worked in companies of all sizes from{' '}
              <span className="text-accent">big corps</span>, through{' '}
              <span className="text-accent">scale-ups</span> to early stage{' '}
              <span className="text-accent">start-ups</span>
            </p>
            <p>
              with <span className="text-accent">web</span> and{' '}
              <span className="text-accent">mobile</span> apps
            </p>
            <p>
              I do all the <span className="text-accent">tech</span> so that you
              focus on <span className="text-accent">business</span>
            </p>
            <p>
              Reach out if I can <span className="text-accent">help</span> you
              in any way!
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="relative mt-[34px] hidden w-full text-[29px] 2xs:block lg:mt-[55px]"
        >
          <Timeline className="absolute top-[55px] h-[21px] w-full text-accent" />
          <div className="flex justify-between space-x-[13px] font-bold">
            <div>
              <div className="inline-flex flex-col items-center">
                <p className="text-[21px] leading-none">2018</p>
                <TimelineDot className="mt-[21px] h-[18px] text-accent" />
                <Image
                  src={IBM_IMG}
                  alt="IBM logo"
                  height={55}
                  width={55}
                  className="mt-[21px]"
                />
              </div>
              <p className="mt-[11px] text-[18px] leading-none">IBM</p>
              <p className="mt-[7px] text-[21px] leading-none text-accent">
                Full-Stack Developer
              </p>
            </div>
            <div>
              <div className="inline-flex flex-col items-center">
                <p className="text-[21px] leading-none">2019</p>
                <TimelineDot className="mt-[21px] h-[18px] text-accent" />
                <Image
                  src={STRV_IMG}
                  alt="STRV logo"
                  height={55}
                  width={55}
                  className="mt-[21px]"
                />
              </div>
              <p className="mt-[11px] text-[18px] leading-none">STRV</p>
              <p className="mt-[7px] text-[21px] leading-none text-accent">
                Front-End Developer
              </p>
            </div>
            <div>
              <div className="inline-flex flex-col items-center">
                <p className="text-[21px] leading-none">2021</p>
                <TimelineDot className="mt-[21px] h-[18px] text-accent" />
                <Image
                  src={OutreachIMG}
                  alt="Outreach logo"
                  height={55}
                  width={55}
                  className="mt-[21px]"
                />
              </div>
              <p className="mt-[11px] text-[18px] leading-none">Outreach</p>
              <p className="mt-[7px] text-[21px] leading-none text-accent">
                Software Engineer
              </p>
            </div>
            <div>
              <div className="inline-flex flex-col items-center">
                <p className="text-[21px] leading-none">2023</p>
                <TimelineDot className="mt-[21px] h-[18px] text-accent" />
                <Image
                  src={MacromoIMG}
                  alt="Macromo image"
                  height={55}
                  width={55}
                  className="mt-[21px]"
                />
              </div>
              <p className="mt-[11px] text-[18px] leading-none">Macromo</p>
              <p className="mt-[7px] text-[21px] leading-none text-accent">
                Technical Lead
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
)

export default About
