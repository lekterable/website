import WaveBlack from '../../../assets/wave-black.svg'
import WaveWhite from '../../../assets/wave-white.svg'
import { styled } from '../../../css'

const waveStyles = {
  height: '350px',
  width: 'calc(600vw)',
  path: { pointerEvents: 'all', '&:hover': { fill: '$special' } }
}

export const BlackWave = styled(WaveBlack, waveStyles)

export const WhiteWave = styled(WaveWhite, waveStyles)

export const Container = styled('div', {
  pointerEvents: 'none',
  width: '100%',
  height: '350px',
  position: 'absolute',
  bottom: '0px',
  overflowX: 'hidden'
})
