import { styled } from '../../../../../css'

export const ListItem = styled('li', {
  mb: '$4',
  fontWeight: '$medium',
  textAlign: 'center',
  '@lg': { mb: '0px', ml: '$5' }
})

export const Link = styled('a', {
  pb: '$1',
  borderBottom: 'none',
  '&:hover': { borderBottom: '2px solid $black' }
})
