import { useLocalStorage } from '@hooks/useLocalStorage'
import { TokenType } from 'types/Token'

const STORAGE_TOKEN_LIMIT = 7
const TOKEN_LIST_STORAGE_KEY = 'recentlySelectedTokenList'

export const useRecentlyUsedTokenList = () => {
  const { value: recentlyUsedTokenList, setItem: setRecentlyUsedTokenList } = useLocalStorage<
    TokenType[]
  >(TOKEN_LIST_STORAGE_KEY, [])

  const updateTokenList = (newTokenList: TokenType[]) => {
    localStorage.setItem(TOKEN_LIST_STORAGE_KEY, JSON.stringify(newTokenList))
    setRecentlyUsedTokenList(newTokenList)
  }

  const addRecentlyUsedToken = (newToken: TokenType) => {
    const isAlreadyExist = recentlyUsedTokenList.some((token) => token.id === newToken.id)
    if (isAlreadyExist) {
      const newTokenList = [
        newToken,
        ...recentlyUsedTokenList.filter((token) => token.id !== newToken.id),
      ]
      updateTokenList(newTokenList)
      return
    }

    const isFull = recentlyUsedTokenList.length >= STORAGE_TOKEN_LIMIT
    const newTokenList = isFull
      ? [newToken, ...recentlyUsedTokenList.slice(0, STORAGE_TOKEN_LIMIT - 1)]
      : [newToken, ...recentlyUsedTokenList]

    updateTokenList(newTokenList)
  }

  return { recentlyUsedTokenList, addRecentlyUsedToken }
}
