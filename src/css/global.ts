const styles = {
  '*': { margin: 0, padding: 0 },
  html: {
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%'
  },
  body: {
    'font-family':
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    'text-rendering': 'optimizeLegibility',
    'min-height': '100vh',
    '@supports (min-height: -webkit-fill-available)': {
      'min-height': '-webkit-fill-available'
    }
  },
  a: {
    color: 'inherit',
    'text-decoration': 'none',
    'border-bottom': '1px solid black'
  },
  ul: { 'list-style': 'none' },
  '@media not screen and (-webkit-min-device-pixel-ratio: 2), not screen and (min--moz-device-pixel-ratio: 2), not screen and (-o-min-device-pixel-ratio: 2/1), not screen and (min-device-pixel-ratio: 2), not screen and (min-resolution: 192dpi), not screen and (min-resolution: 2dppx)':
    {
      '.emoji': {
        marginRight: '5px'
      }
    }
}

export default styles
