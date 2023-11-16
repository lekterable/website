'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Waves } from '~components'
import HeroIMG from '~assets/hero.png'

const Hero = () => (
  <section
    id="hero"
    className="flex min-h-[100vh] flex-1 flex-col justify-between"
  >
    <div className="mt-[89px] flex flex-1 px-[21px] sm:px-[47px] md:px-[55px] lg:px-[123px] xl:px-[144px]">
      <div className="relative mx-auto flex max-w-[322px] flex-1 flex-col justify-center text-[34px] leading-none tracking-wider xs:max-w-[377px] xs:text-[47px] sm:max-w-[521px] sm:text-[55px] md:max-w-[610px] md:text-[76px] lg:max-w-[843px] lg:text-[89px] xl:max-w-[1364px] xl:text-[123px] 2xl:text-[144px]">
        <div className="flex flex-row-reverse flex-wrap items-end justify-end">
          <div className="mx-auto mb-[13px] flex select-none justify-center px-[55px] md:px-[89px] lg:px-[55px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={HeroIMG}
                className="pointer-events-none h-[233px] w-auto md:h-[322px] xl:h-[377px]"
                alt="hero image"
              />
            </motion.div>
          </div>
          <h1>Looking for a dev?</h1>
        </div>
        <h1 className="mt-[18px] text-right font-bold">
          You&apos;ve found one!
        </h1>
      </div>
    </div>
    <Waves />
  </section>
)

export default Hero
