import { DEVICE_MEDIA } from '@styles/core/breakpoints'
import { PaddingProps, paddingStyles } from '@styles/core/padding'
import styled, { css } from 'styled-components'

type ContainerProps = PaddingProps & {
  size: 'sm' | 'md'
}

export const Container = styled.div<ContainerProps>`
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
