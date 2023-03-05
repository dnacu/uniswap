import { useEffect, useState } from 'react'

export const useLazyUnmount = (state: boolean, delayMs: number) => {
  const [isMounted, setIsMounted] = useState(state)

  useEffect(() => {
    if (state) {
      setIsMounted(state)
      return
    }

    const timer = setTimeout(() => {
      setIsMounted(false)
    }, delayMs)

    return () => {
      clearTimeout(timer)
    }
  }, [delayMs, state])

  return isMounted
}
