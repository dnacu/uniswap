import { useAtom } from 'jotai'
import { nextTokenAtom, prevTokenAtom } from '@store/token'

export const useSelectedToken = () => {
  const [prevToken, setPrevToken] = useAtom(prevTokenAtom)
  const [nextToken, setNextToken] = useAtom(nextTokenAtom)

  return {
    prevToken,
    setPrevToken,
    nextToken,
    setNextToken,
  }
}
