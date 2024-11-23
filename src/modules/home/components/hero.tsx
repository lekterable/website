import Image from 'next/image'
import { Waves } from '~components'
import HeroTitle from './hero-title'
import HeroIMG from '~assets/hero.png'

const Hero = () => (
  <section
    id="hero"
    className="min-h-safe flex flex-1 flex-col justify-between"
  >
    <div className="flex flex-1 px-[21px] pt-[89px] sm:px-[47px] md:px-[55px] lg:px-[123px] xl:px-[144px]">
      <div className="mx-auto flex max-w-[322px] flex-1 flex-col justify-center sm:max-w-[521px] md:max-w-[610px] lg:max-w-[843px] xl:max-w-[1364px]">
        <div className="mx-auto select-none">
          <Image
            priority
            src={HeroIMG}
            className="max-h-[233px] w-auto md:max-h-[322px] lg:max-h-[377px]"
            alt="hero image"
          />
        </div>
        <HeroTitle />
      </div>
    </div>
    <Waves />
  </section>
)

export default Hero
