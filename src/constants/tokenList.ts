import { TokenType } from 'types/Token'

export const tokenList: readonly TokenType[] = [
  { symbol: 'ETH', id: 'ethereum' },
  { symbol: 'USDT', id: 'tether' },
  { symbol: 'USDC', id: 'usd-coin' },
  { symbol: 'DAI', id: 'dai' },
  { symbol: 'AAVE', id: 'aave' },
  { symbol: 'WBTC', id: 'bitcoin' },
  { symbol: 'AXS', id: 'axie-infinity' },
  { symbol: 'COMP', id: 'compound-coin' },
  { symbol: 'CRV', id: 'curve-dao-token' },
  { symbol: 'ENS', id: 'ethereum-name-service' },
] as const
