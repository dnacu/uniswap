import { useState } from 'react'
import { TokenType } from 'types/Token'

const STORAGE_TOKEN_LIMIT = 7
const TOKEN_LIST_STORAGE_KEY = 'recentlySelectedTokenList'

export const useRecentlyUsedTokenList = () => {
  const [recentlyUsedTokenList, setRecentlyUsedTokenList] = useState<TokenType[]>(() => {
    const tokenList = localStorage.getItem(TOKEN_LIST_STORAGE_KEY)
    if (!tokenList) {
      return []
    }

    const parsedTokenList = JSON.parse(tokenList)
    if (!Array.isArray(parsedTokenList)) {
      return []
    }

    return parsedTokenList
  })

  const updateTokenList = (newTokenList: TokenType[]) => {
    localStorage.setItem(TOKEN_LIST_STORAGE_KEY, JSON.stringify(newTokenList))
    setRecentlyUsedTokenList(newTokenList)
  }

  const addRecentlyUsedToken = (newToken: TokenType) => {
    const isAlreadyExist = recentlyUsedTokenList.some((token) => token.id === newToken.id)
    if (isAlreadyExist) {
      const newTokenList = recentlyUsedTokenList
        .filter((token) => token.id !== newToken.id)
        .concat(newToken)
      updateTokenList(newTokenList)
      return
    }

    const isFull = recentlyUsedTokenList.length >= STORAGE_TOKEN_LIMIT
    const newTokenList = isFull
      ? [...recentlyUsedTokenList.slice(1, STORAGE_TOKEN_LIMIT), newToken]
      : [...recentlyUsedTokenList, newToken]

    updateTokenList(newTokenList)
  }

  return { recentlyUsedTokenList, addRecentlyUsedToken }
}
