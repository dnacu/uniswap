import { LayoutProps } from '@styles/core/layout'
import { addStyleUnit } from '@utils/addStyleUnit'
import styled, { css } from 'styled-components'

type SpaceProps = Pick<LayoutProps, 'width' | 'height'>

export const Space = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'height'].includes(prop),
})`
  ${({ width, height }: SpaceProps) => css`
    ${width && `width: ${addStyleUnit(width)};`}
    ${height && `height: ${addStyleUnit(height)};`}
  `}
`
