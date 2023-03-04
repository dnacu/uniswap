import { BaseProps } from '@styles/core/base'
import {
  TypographyProps as SystemTypography,
  typographyStyles,
  typographyProps,
} from '@styles/core/typography'
import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type TypographyStyleProps = SystemTypography
type TypographyComponentProps = PropsWithChildren<BaseProps>
type TypographyProps = TypographyStyleProps & TypographyComponentProps

export const Typography = styled(({ as: CustomTag = 'p', ...props }: TypographyComponentProps) => (
  <CustomTag {...props} />
)).withConfig({
  shouldForwardProp: (prop) => ![...typographyProps].includes(prop),
})<TypographyProps>`
  ${(styleProps) => css`
    ${typographyStyles(styleProps)}
  `}
`
