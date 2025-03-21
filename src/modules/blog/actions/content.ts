import ContentAPI from '@tryghost/content-api'

const content = new ContentAPI({
  // key: process.env.GHOST_API_KEY,
  // url: process.env.GHOST_API_URL,
  key: '22444f78447824223cefc48062',
  makeRequest: async ({ url, method, params, headers }) => {
    const apiUrl = new URL(url)

    Object.keys(params)
      .filter((key) => params[key])
      .map((key) => apiUrl.searchParams.set(key, params[key] as string))

    try {
      const response = await fetch(apiUrl.toString(), { headers, method })
      const data = await response.json()

      return { data }
    } catch (error) {
      console.error(error)
    }
  },
  url: 'https://demo.ghost.io',
  version: 'v5.87',
})

export default content
