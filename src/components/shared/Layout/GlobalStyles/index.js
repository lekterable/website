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
        text-rendering: optimizeLegibility;
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

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      @media not screen and (-webkit-min-device-pixel-ratio: 2),
        not screen and (min--moz-device-pixel-ratio: 2),
        not screen and (-o-min-device-pixel-ratio: 2/1),
        not screen and (min-device-pixel-ratio: 2),
        not screen and (min-resolution: 192dpi),
        not screen and (min-resolution: 2dppx) {
        .emoji {
          margin-right: 5px;
        }
      }
    `}
  />
)

export default GlobalStyles
