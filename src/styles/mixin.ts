import { css } from 'styled-components'
import { Shadow, StyleRecord, Typography } from '~/types/common'

export const noneDraggable = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const typography: StyleRecord<Typography> = {
  display_1: css`
    font-size: 60px;
    line-height: 72px;
    font-weight: 700;
  `,
  display_2: css`
    font-size: 48px;
    line-height: 60px;
    font-weight: 700;
  `,
  display_3: css`
    font-size: 36px;
    line-height: 44px;
    font-weight: 700;
  `,
  display_4: css`
    font-size: 30px;
    line-height: 38px;
    font-weight: 700;
  `,
  title: css`
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
  `,
  subtitle_strong: css`
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
  `,
  subtitle: css`
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
  `
}

export const shadow: StyleRecord<Shadow> = {
  sm: css`
    box-shadow:
      0 1px 3px 0 #1a1a1a,
      0 1px 2px 0 #1a1a1a;
  `,
  md: css`
    box-shadow:
      0 4px 8px -2px #1a1a1a,
      0 2px 4px -2px #1a1a1a;
  `,
  lg: css`
    box-shadow: 0 1px 3px 0 #1a1a1a;
  `
}
