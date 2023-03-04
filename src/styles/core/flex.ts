import { addStyleUnit } from '@utils/addStyleUnit'
import { css } from 'styled-components'

export const flexProps = [
  'flex',
  'grow',
  'shrink',
  'basis',
  'direction',
  'wrap',
  'justify',
  'align',
  'gap',
]

export type FlexProps = {
  flex?: string
  direction?: 'row' | 'column'
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  grow?: number | string
  shrink?: number | string
  basis?: number | string
  wrap?: 'wrap' | 'nowrap'
  gap?: number | string
}

export const flexStyles = ({
  flex,
  direction,
  justify,
  align,
  grow,
  shrink,
  basis,
  wrap,
  gap,
}: FlexProps) => css`
  ${flex && `flex: ${flex};`}
  ${direction && `flex-direction: ${direction};`}
  ${justify && `justify-content: ${justify};`}
  ${align && `align-items: ${align};`}
  ${grow && `flex-grow: ${addStyleUnit(grow)};`}
  ${shrink && `flex-shrink: ${addStyleUnit(shrink)};`}
  ${basis && `flex-basis: ${addStyleUnit(basis)};`}
  ${wrap && `flex-wrap: ${wrap};`}
  ${gap && `gap: ${addStyleUnit(gap)};`}
`
