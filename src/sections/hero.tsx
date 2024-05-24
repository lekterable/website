'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { Waves } from '~components'
import HeroIMG from '~assets/hero.png'

const Hero = () => (
  <section
    id="hero"
    className="min-h-safe flex flex-1 flex-col justify-between"
  >
    <div className="mt-[89px] flex flex-1 px-[21px] sm:px-[47px] md:px-[55px] lg:px-[123px] xl:px-[144px]">
      <div className="mx-auto flex max-w-[322px] flex-1 flex-col justify-center sm:max-w-[521px] md:max-w-[610px] lg:max-w-[843px] xl:max-w-[1364px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto select-none"
        >
          <Image
            src={HeroIMG}
            className="max-h-[233px] w-auto md:max-h-[322px] lg:max-h-[377px]"
            alt="hero image"
          />
        </motion.div>
        <div className="mt-[18px] text-[29px] leading-none tracking-wider 2xs:text-[34px] sm:text-[47px] md:text-[55px] lg:text-[76px] xl:text-[89px] 2xl:text-[123px] 3xl:text-[144px]">
          <h1 className="flex">
            Looking for&nbsp;
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                strings: [
                  'a tech lead?',
                  'a consultant?',
                  'an engineer?',
                  'a dev?',
                ],
              }}
            />
          </h1>
          <h1 className="mt-[18px] text-right font-bold">
            You&apos;ve found one!
          </h1>
        </div>
      </div>
    </div>
    <Waves />
  </section>
)

export default Hero
