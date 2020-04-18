import { css, Global } from '@emotion/core'
import React from 'react'

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
        min-height: -webkit-fill-available;
      }

      body,
      #___gatsby,
      #gatsby-focus-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid black;
      }
    `}
  />
)

export default GlobalStyles
