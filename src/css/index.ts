import { createCss } from '@stitches/react'
import utils from './utils'
import media from './media'
import theme from './theme'
import styles from './global'

export const { styled, getCssString, global } = createCss({
  media,
  theme,
  utils
})

export const globalStyles = global(styles)
