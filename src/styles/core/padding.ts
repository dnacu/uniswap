import { addStyleUnit } from '@utils/addStyleUnit'
import { css } from 'styled-components'

export type PaddingProps = {
  p?: number | string
  pt?: number | string
  pr?: number | string
  pb?: number | string
  pl?: number | string
  px?: number | string
  py?: number | string
}

export const paddingStyles = ({ p, pt, pr, pb, pl, px, py }: PaddingProps) => css`
  ${p && `padding: ${addStyleUnit(p)};`}
  ${pt && `padding-top: ${addStyleUnit(pt)};`}
  ${pr && `padding-right: ${addStyleUnit(pr)};`}
  ${pb && `padding-bottom: ${addStyleUnit(pb)};`}
  ${pl && `padding-left: ${addStyleUnit(pl)};`}
  ${px && `padding-left: ${addStyleUnit(px)}; padding-right: ${addStyleUnit(px)};`}
  ${py && `padding-top: ${addStyleUnit(py)}; padding-bottom: ${addStyleUnit(py)};`}
`
