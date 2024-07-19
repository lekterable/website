import ContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const content = new ContentAPI({
  // key: process.env.GHOST_API_KEY,
  // url: process.env.GHOST_API_URL,
  key: '22444f78447824223cefc48062',
  url: 'https://demo.ghost.io',
  version: 'v5.87',
})

export default content
