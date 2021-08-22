import { styled } from '../../css'

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100vh - 128px)',
  '@md': { height: 'calc(100vh - 160px)' }
})
