import { BaseProps } from '@styles/core/base'
import { layoutProps, LayoutProps, layoutStyles } from '@styles/core/layout'
import { paddingProps, PaddingProps, paddingStyles } from '@styles/core/padding'
import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type PaperStyleProps = LayoutProps &
  PaddingProps & { radius?: number; bgColor?: string; borderColor?: string }
type PaperComponentProps = PropsWithChildren<BaseProps>
type PaperProps = PaperStyleProps & PaperComponentProps

export const Paper = styled(({ as: CustomTag = 'div', ...props }: PaperComponentProps) => (
  <CustomTag {...props} onClick={() => null} />
)).withConfig({
  shouldForwardProp: (prop) =>
    !['radius', 'bgColor', 'borderColor', ...paddingProps, ...layoutProps].includes(prop),
})<PaperProps>`
  ${({ radius, bgColor, borderColor, ...styleProps }) =>
    css`
      ${layoutStyles(styleProps)}
      ${paddingStyles(styleProps)}

      ${radius && `border-radius: ${typeof radius === 'string' ? radius : `${radius}px`};`}
      ${bgColor && `background-color: ${bgColor};`}
      ${borderColor && `border: 1px solid ${borderColor};`}
    `}
`
