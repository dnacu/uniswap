import { tokenList } from '@constants/tokenList'
import { atom } from 'jotai'
import { TokenType } from 'types/Token'

const DEFAULT_PREV_TOKEN_SYMBOL = 'DAI'
const DEFAULT_NEXT_TOKEN_SYMBOL = 'USDC'

export const prevTokenAtom = atom<TokenType>(
  tokenList.find((token) => token.symbol === DEFAULT_PREV_TOKEN_SYMBOL) ?? tokenList[0]
)
export const nextTokenAtom = atom<TokenType>(
  tokenList.find((token) => token.symbol === DEFAULT_NEXT_TOKEN_SYMBOL) ?? tokenList[0]
)
