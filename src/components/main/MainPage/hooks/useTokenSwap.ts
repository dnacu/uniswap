import { tokenList } from '@constants/tokenList'
import { atom, useAtom } from 'jotai'
import { TokenType } from 'types/Token'
import { useEffect } from 'react'
import { useTokenPrice } from './useTokenPrice'
import { usePrevious } from '@hooks/usePrevious'

const DEFAULT_PREV_TOKEN_SYMBOL = 'ETH'
const DEFAULT_NEXT_TOKEN_SYMBOL = 'AAVE'

const prevTokenAtom = atom<TokenType>(
  tokenList.find((token) => token.symbol === DEFAULT_PREV_TOKEN_SYMBOL) ?? tokenList[0]
)
const nextTokenAtom = atom<TokenType>(
  tokenList.find((token) => token.symbol === DEFAULT_NEXT_TOKEN_SYMBOL) ?? tokenList[0]
)

export const useTokenSwap = () => {
  const [prevToken, setPrevToken] = useAtom(prevTokenAtom)
  const {
    amount: prevTokenAmount,
    tokenPrice: prevTokenPrice,
    totalPrice: prevTotalPrice,
    setAmount: setPrevTokenAmount,
    updateTotalPrice: updatePrevTotalPrice,
  } = useTokenPrice(prevToken)
  const previousPrevTotalPrice = usePrevious(prevTotalPrice)

  const [nextToken, setNextToken] = useAtom(nextTokenAtom)
  const {
    amount: nextTokenAmount,
    tokenPrice: nextTokenPrice,
    totalPrice: nextTotalPrice,
    setAmount: setNextTokenAmount,
    updateTotalPrice: updateNextTotalPrice,
  } = useTokenPrice(nextToken)
  const previousNextTotalPrice = usePrevious(nextTotalPrice)

  useEffect(() => {
    if (prevTotalPrice !== previousPrevTotalPrice && prevTotalPrice !== nextTotalPrice) {
      updateNextTotalPrice(prevTotalPrice)
    }

    if (nextTotalPrice !== previousNextTotalPrice && nextTotalPrice !== prevTotalPrice) {
      updatePrevTotalPrice(nextTotalPrice)
    }
  }, [
    nextTotalPrice,
    prevTotalPrice,
    previousNextTotalPrice,
    previousPrevTotalPrice,
    updateNextTotalPrice,
    updatePrevTotalPrice,
  ])

  return {
    prevToken: {
      ...prevToken,
      amount: prevTokenAmount,
      tokenPrice: prevTokenPrice,
      totalPrice: prevTotalPrice,
    },
    nextToken: {
      ...nextToken,
      amount: nextTokenAmount,
      tokenPrice: nextTokenPrice,
      totalPrice: nextTotalPrice,
    },
    setPrevToken,
    setPrevTokenAmount,
    setNextToken,
    setNextTokenAmount,
  }
}
