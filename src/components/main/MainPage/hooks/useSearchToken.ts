import { tokenList } from '@constants/tokenList'
import { useEffect, useState } from 'react'
import { TokenType } from 'types/Token'

export const useSearchToken = (query: string) => {
  const [tokens, setTokens] = useState<TokenType[]>([])

  useEffect(() => {
    if (query.length === 0) {
      setTokens(tokenList)
      return
    }

    const filteredTokens = tokenList.filter((token) => {
      return token.symbol.toLowerCase().includes(query.toLowerCase())
    })

    setTokens(filteredTokens)
  }, [query])

  return { tokens }
}
