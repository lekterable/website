/** @jsx jsx */
import { jsx } from 'theme-ui'

const Stripe = ({ className }) => (
  <div
    className={className}
    sx={{
      position: 'absolute',
      width: '100%',
      height: '2px',
      backgroundColor: 'primary',
      transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)'
    }}
  />
)

const Hamburger = ({ className, onClick, isOpen }) => (
  <button
    className={className}
    onClick={onClick}
    aria-label={`${isOpen ? 'close menu' : 'open menu'}`}
    sx={{ background: 'transparent', border: 'none' }}
  >
    <div sx={{ position: 'relative', width: '24px', height: '24px' }}>
      <Stripe
        sx={{
          top: isOpen ? '45%' : '12.5%',
          transform: `rotate(${isOpen ? '45deg' : '0'})`
        }}
      />
      <Stripe
        sx={{
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: isOpen ? 'transparent' : 'primary'
        }}
      />
      <Stripe
        sx={{
          bottom: isOpen ? '45%' : '12.5%',
          transform: `rotate(${isOpen ? '-45deg' : '0'})`
        }}
      />
    </div>
  </button>
)

export default Hamburger
