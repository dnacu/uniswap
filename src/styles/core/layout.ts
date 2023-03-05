import { addStyleUnit } from '@utils/addStyleUnit'
import { css } from 'styled-components'

export const layoutProps = [
  'width',
  'height',
  'maxWidth',
  'maxHeight',
  'minWidth',
  'minHeight',
  'overflow',
  'overflowX',
  'overflowY',
  'hideScroll',
]

export type LayoutProps = {
  width?: number | string
  height?: number | string
  maxWidth?: number | string
  maxHeight?: number | string
  minWidth?: number | string
  minHeight?: number | string
  overflow?: 'hidden' | 'auto' | 'scroll' | 'visible'
  overflowX?: 'hidden' | 'auto' | 'scroll' | 'visible'
  overflowY?: 'hidden' | 'auto' | 'scroll' | 'visible'
  hideScroll?: boolean
}

export const layoutStyles = ({
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  overflow,
  overflowX,
  overflowY,
  hideScroll,
}: LayoutProps) => css`
  ${width && `width: ${addStyleUnit(width)};`}
  ${height && `height: ${addStyleUnit(height)};`}
  ${maxWidth && `max-width: ${addStyleUnit(maxWidth)};`}
  ${maxHeight && `max-height: ${addStyleUnit(maxHeight)};`}
  ${minWidth && `min-width: ${addStyleUnit(minWidth)};`}
  ${minHeight && `min-height: ${addStyleUnit(minHeight)};`}
  ${overflow && `overflow: ${overflow};`}
  ${overflowX && `overflow-x: ${overflowX};`}
  ${overflowY && `overflow-y: ${overflowY};`}
  ${hideScroll &&
  `
    scrollbar-width: none;
    -ms-overflow-style: none;
  
    &::-webkit-scrollbar {
      display: none;
    }
  `}
`
