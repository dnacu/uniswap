export const numberWithCommas = (x: number, maximumFractionDigits = 2) => {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits }).format(x)
}
