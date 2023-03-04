import { addStyleUnit } from '@utils/addStyleUnit'
import { css } from 'styled-components'

export type LayoutProps = {
  width?: number | string
  height?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  minWidth?: number | string
  minHeight?: number | string
}

export const layoutStyles = ({ width, height, maxWidth, maxHeight, minWidth, minHeight }: LayoutProps) => css`
  ${width && `width: ${addStyleUnit(width)};`}
  ${height && `height: ${addStyleUnit(height)};`}
  ${maxWidth && `max-width: ${addStyleUnit(maxWidth)};`}
  ${maxHeight && `max-height: ${addStyleUnit(maxHeight)};`}
  ${minWidth && `min-width: ${addStyleUnit(minWidth)};`}
  ${minHeight && `min-height: ${addStyleUnit(minHeight)};`}
`
