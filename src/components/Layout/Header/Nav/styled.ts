import { styled } from '../../../../css'

export const List = styled('ul', {
  position: 'absolute',
  zIndex: 1,
  flexDirection: 'column',
  top: '$7',
  left: 0,
  right: 0,
  fontSize: '$4',
  backgroundColor: '$background',
  variants: {
    state: { visible: { display: 'flex' }, hidden: { display: 'none' } }
  },
  '@md': { top: '$8' },
  '@lg': { flexDirection: 'row', position: 'unset' }
})
