import { styled } from '../../../../css'
import logo from '../../../../assets/logo.svg'

export const Logo = styled(logo, {
  size: '50px',
  '&:hover': { path: { fill: '$special' } }
})
