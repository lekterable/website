import { Amatic_SC, Chivo_Mono, Josefin_Sans } from 'next/font/google'
import { cn } from '~utils'

export const amaticSC = Amatic_SC({
  display: 'block',
  preload: true,
  subsets: ['latin'],
  variable: '--font-amatic-sc',
  weight: ['400', '700'],
})

export const chivoMono = Chivo_Mono({
  display: 'block',
  preload: true,
  subsets: ['latin'],
  variable: '--font-chivo-mono',
  weight: ['400'],
})

export const josefinSans = Josefin_Sans({
  display: 'block',
  preload: true,
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  weight: ['300', '400', '600', '700'],
})

export default cn(amaticSC.variable, chivoMono.variable, josefinSans.variable)
