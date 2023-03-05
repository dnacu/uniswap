import { useGetTokenPriceQuery } from '@apis/getTokenPrice'
import { FRACTION_DIGITS } from '@constants/fractionDigits'
import { useCallback, useEffect, useState } from 'react'
import { TokenType } from 'types/Token'

export type TokenPriceType = TokenType & {
  amount: string
  tokenPrice: number
  totalPrice: number
}

export const useTokenPrice = (token: TokenType) => {
  const [amount, setAmount] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)

  const { data: tokenPriceData } = useGetTokenPriceQuery({
    variables: { ids: token.id },
  })

  useEffect(() => {
    if (!tokenPriceData) {
      return
    }

    const totalPrice = parseFloat(
      (tokenPriceData[token.id].usd * parseFloat(amount || '0')).toFixed(FRACTION_DIGITS)
    )
    setTotalPrice(totalPrice)
  }, [amount, token.id, tokenPriceData])

  const changeAmount = useCallback(
    (amount: string) => {
      if (!amount || !tokenPriceData?.[token.id].usd) {
        setAmount('')
        setTotalPrice(0)
        return
      }

      const totalPrice = parseFloat(
        (tokenPriceData?.[token.id].usd * parseFloat(amount)).toFixed(FRACTION_DIGITS)
      )
      setAmount(amount)
      setTotalPrice(totalPrice)
    },
    [token.id, tokenPriceData]
  )

  const updateTotalPrice = useCallback(
    (totalPrice: number) => {
      if (!tokenPriceData?.[token.id].usd) {
        return
      }

      setTotalPrice(totalPrice)
      setAmount(
        `${parseFloat((totalPrice / tokenPriceData?.[token.id].usd).toFixed(FRACTION_DIGITS))}`
      )
    },
    [token.id, tokenPriceData]
  )

  return {
    amount,
    totalPrice,
    tokenPrice: tokenPriceData?.[token.id].usd ?? 0,
    setAmount: changeAmount,
    updateTotalPrice,
  }
}
