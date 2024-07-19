'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Me from './me'
import Timeline from './timeline'
import AboutIMG from '~assets/about.png'

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 0.5, staggerDirection: 1 } },
}

const About = () => (
  <section
    id="about"
    className="min-h-safe bg-primary px-[34px] py-[89px] text-secondary"
  >
    <motion.div
      variants={variants}
      initial="hidden"
      // animate="show"
      // initial={{ opacity: 0 }}
      whileInView="show"
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mx-auto flex flex-col justify-center gap-8 lg:flex-row"
    >
      <motion.div
        // variants={item}
        // lg:mr-[34px] xl:mr-[89px]
        className="mb-[29px] flex justify-center md:mb-[34px]"
      >
        <Image
          src={AboutIMG}
          alt="about image"
          className="h-[322px] w-auto md:h-[377px] lg:h-[521px] xl:h-[521px]"
        />
      </motion.div>
      <div>
        <Me />
        <Timeline />
      </div>
    </motion.div>
  </section>
)

export default About
