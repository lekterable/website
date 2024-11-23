'use client'

import { useState } from 'react'
import Typewriter from 'typewriter-effect'

const HeroTitle = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="mt-[18px] text-[29px] leading-none tracking-wider 2xs:text-[34px] sm:text-[47px] md:text-[55px] lg:text-[76px] xl:text-[89px] 2xl:text-[123px] 3xl:text-[144px]">
      <h1 className="flex font-normal">
        Looking for&nbsp;
        {!isLoaded && 'a tech lead?'}
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            onCreateTextNode: (_, text) => {
              if (!isLoaded) {
                setIsLoaded(true)
              }

              return text
            },
            strings: [
              'a tech lead?',
              'a consultant?',
              'an engineer?',
              'a dev?',
            ],
          }}
        />
      </h1>
      <h1 className="mt-[18px] text-right">You&apos;ve found one!</h1>
    </div>
  )
}

export default HeroTitle
