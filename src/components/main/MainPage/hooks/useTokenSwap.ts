import { useEffect } from 'react'
import { useTokenPrice } from './useTokenPrice'
import { usePrevious } from '@hooks/usePrevious'
import { useSelectedToken } from './useSelectedToken'

export const useTokenSwap = () => {
  const { prevToken, nextToken, setPrevToken, setNextToken } = useSelectedToken()
  const {
    amount: prevTokenAmount,
    tokenPrice: prevTokenPrice,
    totalPrice: prevTotalPrice,
    setAmount: setPrevTokenAmount,
    updateTotalPrice: updatePrevTotalPrice,
  } = useTokenPrice(prevToken)
  const previousPrevTotalPrice = usePrevious(prevTotalPrice)

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

  const exchangeRate =
    prevTokenAmount && nextTokenAmount
      ? parseFloat((parseFloat(prevTokenAmount) / parseFloat(nextTokenAmount)).toFixed(10))
      : 0

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
    exchangeRate,
    setPrevToken,
    setPrevTokenAmount,
    setNextToken,
    setNextTokenAmount,
  }
}
