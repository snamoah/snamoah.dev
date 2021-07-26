import { css } from '@emotion/react'
import { Device } from './breakpoints'
import theme from '../../config/theme'

import '../fonts/fonts.css'

export const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    color: ${theme.colors.BLACK};
  }

  h1 {
    font-family: 'Noto Sans';
    font-size: 48px;
    margin-bottom: 0;
  }

  ${Device.DESKTOP} {
    h1 {
      font-family: 64px;
    }
  }
`
