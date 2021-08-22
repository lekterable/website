import { styled } from '../../../../../css'

export const Stripe = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '$1',
  backgroundColor: '$primary',
  transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)'
})

export const Button = styled('button', {
  background: 'transparent',
  border: 'none',
  '@lg': { display: 'none' }
})

export const Container = styled('div', {
  position: 'relative',
  width: '$5',
  height: '$5'
})
