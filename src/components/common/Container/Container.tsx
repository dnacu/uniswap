import { BaseProps } from '@styles/core/base'
import { DEVICE_MEDIA } from '@styles/core/breakpoints'
import { paddingProps, PaddingProps, paddingStyles } from '@styles/core/padding'
import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type ContainerStyleProps = PaddingProps & {
  size: 'sm' | 'md'
}
type ContainerComponentProps = PropsWithChildren<BaseProps>
type ContainerProps = ContainerStyleProps & ContainerComponentProps

export const Container = styled(({ as: CustomTag = 'div', ...props }: ContainerComponentProps) => (
  <CustomTag {...props} />
)).withConfig({
  shouldForwardProp: (prop) => !['size', ...paddingProps].includes(prop),
})<ContainerProps>`
  ${({ size, ...styleProps }) => css`
    ${paddingStyles(styleProps)}

    ${size === 'sm' && `max-width: 480px;`}
    ${size === 'md' && `max-width: 640px;`}
  `}

  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;

  @media ${DEVICE_MEDIA.MOBILE} {
    width: calc(100% - 40px);
  }
`
