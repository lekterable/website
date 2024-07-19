'use client'

import Prism from 'prismjs'
import { useEffect } from 'react'
// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/components/prism-typescript'

// TODO: Highlight code syntax
const HighlightSyntax = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return null
}

export default HighlightSyntax
