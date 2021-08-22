import { styled } from '../../../css'

export const Footer = styled('footer', { textAlign: 'center', py: '$3' })

export const Link = styled('a', {
  color: '$link',
  borderColor: '$link',
  transition: 'border-color 0.3s, color 0.3s',
  '&:hover': { color: '$special', borderColor: '$special' }
})
