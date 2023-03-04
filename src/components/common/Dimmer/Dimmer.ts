import { BaseProps } from '@styles/core/base'
import styled from 'styled-components'

type DimmerProps = Pick<BaseProps, 'className'> & {
  opacity?: number
}

export const Dimmer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['opacity'].includes(prop),
})<DimmerProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: ${({ opacity }) => opacity || 0.5};
`
