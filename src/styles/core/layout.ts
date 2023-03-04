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
  ${width && `width: ${typeof width === 'string' ? width : `${width}px`};`}
  ${height && `height: ${typeof height === 'string' ? height : `${height}px`};`}
  ${maxWidth && `max-width: ${typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`};`}
  ${maxHeight && `max-height: ${typeof maxHeight === 'string' ? maxHeight : `${maxHeight}px`};`}
  ${minWidth && `min-width: ${typeof minWidth === 'string' ? minWidth : `${minWidth}px`};`}
  ${minHeight && `min-height: ${typeof minHeight === 'string' ? minHeight : `${minHeight}px`};`}
`
