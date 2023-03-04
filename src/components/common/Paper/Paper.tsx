import { LayoutProps, layoutStyles } from '@styles/core/layout'
import { PaddingProps, paddingStyles } from '@styles/core/padding'
import styled, { css } from 'styled-components'

export type PaperProps = LayoutProps &
  PaddingProps & {
    radius?: number
    bgColor?: string
    borderColor?: string
  }

export const Paper = styled.div<PaperProps>`
  ${({ radius, bgColor, borderColor, ...styleProps }) =>
    css`
      ${layoutStyles(styleProps)}
      ${paddingStyles(styleProps)}

      ${radius && `border-radius: ${typeof radius === 'string' ? radius : `${radius}px`};`}
      ${bgColor && `background-color: ${bgColor};`}
      ${borderColor && `border: 1px solid ${borderColor};`}
    `}
`
