import { styled } from '../../../css'

export const Header = styled('header', {
  display: 'flex',
  height: '$7',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '$5',
  '@md': { height: '$8', px: '$6' }
})
