export type SymbolType =
  | 'ETH'
  | 'DAI'
  | 'USDC'
  | 'USDT'
  | 'WBTC'
  | 'WETH'
  | 'AAVE'
  | 'AXS'
  | 'COMP'
  | 'CRV'
  | 'ENS'

export type TokenType = {
  id: string
  symbol: SymbolType
}
