import lengths from './lengths'

const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  space: lengths,
  sizes: lengths,
  fontSizes: {
    1: '12px',
    2: '14px',
    3: '16px',
    4: '20px',
    5: '24px',
    6: '32px',
    7: '48px',
    8: '80px',
    9: '128px'
  },
  lineHeights: { body: 1.5, heading: 1.125 },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    body: '$normal',
    heading: '$bold'
  },
  colors: {
    black: '#000',
    white: '#fff',
    primary: '#000',
    link: '#07c',
    special: '#ff0',
    muted: '#808a9f',
    text: '$black',
    background: '$white'
  }
}

export default theme
