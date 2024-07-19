// @ts-expect-error - there is no declaration file for this package
import AdminAPI from '@tryghost/admin-api'

const admin = new AdminAPI({
  key: process.env.GHOST_ADMIN_API_KEY,
  url: 'https://ghost.kornel.me',
  version: 'v5.87',
})

export default admin
