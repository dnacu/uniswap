import { tokenList } from '@constants/tokenList'
import { useGetTokenPriceQuery } from '@apis/getTokenPrice'
import { atom, useAtom } from 'jotai'
import { TokenType } from 'types/Token'
import { useEffect, useMemo, useState } from 'react'

const DEFAULT_PREV_TOKEN_SYMBOL = 'DAI'
const DEFAULT_NEXT_TOKEN_SYMBOL = 'USDC'
const defaultPrevToken =
  tokenList.find((token) => token.symbol === DEFAULT_PREV_TOKEN_SYMBOL) ?? tokenList[0]
const defaultNextToken =
  tokenList.find((token) => token.symbol === DEFAULT_NEXT_TOKEN_SYMBOL) ?? tokenList[0]

const prevTokenAtom = atom<TokenType>(defaultPrevToken)
const nextTokenAtom = atom<TokenType>(defaultNextToken)

export type TokenPriceType = TokenType & {
  amount: number
  tokenPrice: number
  totalPrice: number
}

export const useTokenPrice = () => {
  const [prevTokenAmount, setPrevTokenAmount] = useState(0)
  const [nextTokenAmount, setNextTokenAmount] = useState(0)

  const [prevTotalPrice, setPrevTotalPrice] = useState(0)
  const [nextTotalPrice, setNextTotalPrice] = useState(0)

  const [prevToken, setPrevToken] = useAtom(prevTokenAtom)
  const [nextToken, setNextToken] = useAtom(nextTokenAtom)

  const { data: prevTokenPriceData } = useGetTokenPriceQuery<typeof prevToken.id>({
    variables: { ids: prevToken.id },
    options: {
      onSuccess: (data) => {
        const totalPrice = parseFloat((data[prevToken.id].usd * prevTokenAmount).toFixed(2))
        setPrevTotalPrice(totalPrice)
      },
    },
  })
  const { data: nextTokenPriceData } = useGetTokenPriceQuery({
    variables: { ids: nextToken.id },
    options: {
      onSuccess: (data) => {
        const totalPrice = parseFloat((data[prevToken.id].usd * nextTokenAmount).toFixed(2))
        setNextTotalPrice(totalPrice)
      },
    },
  })

  const prevTokenPrice = useMemo(
    () => prevTokenPriceData?.[prevToken.id].usd ?? 0,
    [prevToken.id, prevTokenPriceData]
  )
  const nextTokenPrice = useMemo(
    () => nextTokenPriceData?.[nextToken.id].usd ?? 0,
    [nextToken.id, nextTokenPriceData]
  )

  useEffect(() => {
    const prevTokenAmount = parseFloat((nextTotalPrice / prevTokenPrice).toFixed(10))
    setPrevTokenAmount(prevTokenAmount)
  }, [prevTokenPrice, nextTotalPrice])

  useEffect(() => {
    const nextTokenAmount = parseFloat((prevTotalPrice / nextTokenPrice).toFixed(10))
    setNextTokenAmount(nextTokenAmount)
  }, [nextTokenPrice, prevTotalPrice])

  const updatePrevTokenAmount = (amount: number) => {
    setPrevTokenAmount(amount)

    const prevTokenTotalPrice = parseFloat((amount * prevTokenPrice).toFixed(2))
    const nextTokenAmount = parseFloat((prevTokenTotalPrice / nextTokenPrice).toFixed(10))
    const nextTokenTotalPrice = parseFloat((nextTokenAmount * nextTokenPrice).toFixed(2))

    setPrevTotalPrice(prevTokenTotalPrice)
    setNextTokenAmount(nextTokenAmount)
    setNextTotalPrice(nextTokenTotalPrice)
  }

  const updateNextTokenAmount = (amount: number) => {
    setNextTokenAmount(amount)

    const nextTokenTotalPrice = parseFloat((amount * nextTokenPrice).toFixed(2))
    const prevTokenAmount = parseFloat((nextTokenTotalPrice / prevTokenPrice).toFixed(10))
    const prevTokenTotalPrice = parseFloat((prevTokenAmount * prevTokenPrice).toFixed(2))

    setNextTotalPrice(nextTokenTotalPrice)
    setPrevTokenAmount(prevTokenAmount)
    setPrevTotalPrice(prevTokenTotalPrice)
  }

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
    setPrevTokenAmount: updatePrevTokenAmount,
    setNextToken,
    setNextTokenAmount: updateNextTokenAmount,
  }
}
