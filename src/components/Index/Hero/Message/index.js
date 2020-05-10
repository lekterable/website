/** @jsx jsx */
import { jsx } from 'theme-ui'

const Message = () => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      pt: 6,
      pr: [5, 7, 8],
      pl: [5, 7],
      fontFamily: 'Amatic SC',
      fontSize: [42, 64, 98, 128],
      letterSpacing: 5,
      textAlign: ['center', 'unset']
    }}
  >
    <span>Looking for a dev?</span>
    <span
      sx={{
        fontWeight: 'bold',
        textAlign: ['unset', 'right'],
        mt: 6
      }}
    >
      You've found one!
    </span>
  </div>
)

export default Message
