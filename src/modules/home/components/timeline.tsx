'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import IBM_IMG from '~assets/ibm.png'
import MacromoIMG from '~assets/macromo.jpeg'
import OutreachIMG from '~assets/outreach.jpeg'
import STRV_IMG from '~assets/strv.png'
import TimelineDot from '~assets/timeline-dot.svg'
import TimelineLine from '~assets/timeline.svg'

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const positions = [
  {
    company: 'IBM',
    imgSrc: IBM_IMG,
    role: 'Full-Stack Developer',
    year: 2018,
  },
  {
    company: 'STRV',
    imgSrc: STRV_IMG,
    role: 'Front-End Developer',
    year: 2019,
  },
  {
    company: 'Outreach',
    imgSrc: OutreachIMG,
    role: 'Software Engineer',
    year: 2021,
  },
  {
    company: 'Macromo',
    imgSrc: MacromoIMG,
    role: 'Technical Lead',
    year: 2023,
  },
]

const Timeline = () => (
  <>
    <motion.div
      variants={variants}
      className="relative mx-auto mt-[34px] hidden w-full max-w-2xl text-[29px] 2xs:block lg:mt-[55px]"
    >
      <TimelineLine className="absolute top-[49px] h-[21px] w-full text-accent" />
      <div className="flex justify-between space-x-[13px]">
        {positions.map(({ company, role, year, imgSrc }, index) => (
          <div key={index}>
            <div className="inline-flex flex-col items-center">
              <p className="text-base leading-none">{year}</p>
              <TimelineDot className="mt-[18px] h-[18px] text-accent" />
              <Image
                src={imgSrc}
                alt={`${company} logo`}
                height={55}
                width={55}
                className="mt-[18px]"
              />
            </div>
            <p className="mt-[11px] text-xs leading-none sm:text-sm">
              {company}
            </p>
            <p className="mt-[7px] text-sm leading-tight text-accent sm:mt-[2px] sm:text-base">
              {role}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  </>
)

export default Timeline
