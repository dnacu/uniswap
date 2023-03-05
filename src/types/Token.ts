export type TokenIdType =
  | 'ethereum'
  | 'tether'
  | 'usd-coin'
  | 'dai'
  | 'aave'
  | 'bitcoin'
  | 'axie-infinity'
  | 'compound-coin'
  | 'curve-dao-token'
  | 'ethereum-name-service'

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
  id: TokenIdType
  symbol: SymbolType
}
