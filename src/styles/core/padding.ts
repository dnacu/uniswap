import { css } from 'styled-components'

export type PaddingProps = {
  p?: number | string
  pt?: number | string
  pr?: number | string
  pb?: number | string
  pl?: number | string
}

export const paddingStyles = ({ p, pt, pr, pb, pl }: PaddingProps) => css`
  ${p && `padding: ${typeof p === 'string' ? p : `${p}px`};`}
  ${pt && `padding-top: ${typeof pt === 'string' ? pt : `${pt}px`};`}
  ${pr && `padding-right: ${typeof pr === 'string' ? pr : `${pr}px`};`}
  ${pb && `padding-bottom: ${typeof pb === 'string' ? pb : `${pb}px`};`}
  ${pl && `padding-left: ${typeof pl === 'string' ? pl : `${pl}px`};`}
`
