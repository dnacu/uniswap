import { BaseProps } from '@styles/core/base'
import { flexProps, FlexProps, flexStyles } from '@styles/core/flex'
import { layoutProps, LayoutProps, layoutStyles } from '@styles/core/layout'
import { paddingProps, PaddingProps, paddingStyles } from '@styles/core/padding'
import { PropsWithChildren, MouseEventHandler } from 'react'
import styled, { css } from 'styled-components'

type StackStyleProps = LayoutProps & PaddingProps & FlexProps
type StackComponentProps = PropsWithChildren<
  BaseProps & { onClick?: MouseEventHandler<HTMLElement> }
>
export type StackProps = StackStyleProps & StackComponentProps

export const Stack = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['radius', 'bgColor', 'borderColor', ...paddingProps, ...layoutProps, ...flexProps].includes(
      prop
    ),
})<StackProps>`
  ${(styleProps) =>
    css`
      ${flexStyles(styleProps)}
      ${layoutStyles(styleProps)}
      ${paddingStyles(styleProps)}

      display: flex;
    `}
`
