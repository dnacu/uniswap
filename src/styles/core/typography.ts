import { addStyleUnit } from '@utils/addStyleUnit'
import { css } from 'styled-components'

export const typographyProps = ['size', 'weight', 'color']

export type TypographyProps = {
  size?: number | string
  weight?: 300 | 400 | 500 | 600 | 700 | 800 | 900
  color?: string
}

export const typographyStyles = ({ size, weight, color }: TypographyProps) => css`
  ${size && `font-size: ${addStyleUnit(size)};`}
  ${weight && `font-weight: ${weight};`}
  ${color && `color: ${color};`}
`
