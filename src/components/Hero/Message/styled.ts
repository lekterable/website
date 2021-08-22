import { styled } from '../../../css'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Amatic SC',
  fontSize: '$7',
  letterSpacing: '5px',
  textAlign: 'center',
  mt: '$7',
  position: 'relative',
  '@md': { fontSize: '$8', textAlign: 'unset' },
  '@lg': { fontSize: '$9' }
})

export const Message = styled('span', { position: 'relative' })
