export type StyleUnitType = 'px' | '%' // add more if needed

export const addStyleUnit = (value: string | number, unit?: StyleUnitType) => {
  const defaultStyleUnit = 'px'

  if (typeof value === 'string') {
    return value
  }
  if (typeof value === 'number') {
    return `${value}${unit || defaultStyleUnit}`
  }

  return value
}
