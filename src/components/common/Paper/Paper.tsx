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
  ${({ width, height, p, pt, pr, pb, pl, radius, bgColor, borderColor }) =>
    css`
      ${layoutStyles({ width, height })}
      ${paddingStyles({ p, pt, pr, pb, pl })}

      ${width && `width: ${typeof width === 'string' ? width : `${width}px`};`}
      ${height && `height: ${typeof height === 'string' ? height : `${height}px`};`}
      ${radius && `border-radius: ${typeof radius === 'string' ? radius : `${radius}px`};`}
      ${bgColor && `background-color: ${bgColor};`}
      ${borderColor && `border: 1px solid ${borderColor};`}
    `}
`
