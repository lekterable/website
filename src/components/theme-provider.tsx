'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

type Props = ThemeProviderProps

const ThemeProvider = ({ children, ...props }: Props): JSX.Element => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
)

export default ThemeProvider
