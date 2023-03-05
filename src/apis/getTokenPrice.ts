import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { TokenIdType } from 'types/Token'
import { axiosGET } from './base'

export type GetTokenPriceRequestType = {
  vs_currencies?: string
  ids: TokenIdType | TokenIdType[]
}

export type GetTokenPriceResponseType<
  TokenId extends TokenIdType,
  Currency extends string = 'usd'
> = {
  [key in TokenId]: {
    [key in Currency]: number
  }
}

const getTokenPriceQueryPath = () => '/simple/price'

export const getTokenPriceQueryKey = (params: GetTokenPriceRequestType) =>
  [{ path: getTokenPriceQueryPath(), params }] as const

const getTokenPrice = <TokenId extends TokenIdType, Currency extends string = 'usd'>(
  params: GetTokenPriceRequestType
) => {
  return axiosGET<GetTokenPriceRequestType, GetTokenPriceResponseType<TokenId, Currency>>(
    getTokenPriceQueryPath(),
    params
  )
}

export const useGetTokenPriceQuery = <
  TokenId extends TokenIdType,
  Currency extends string = 'usd'
>({
  variables: { vs_currencies = 'usd', ids },
  options,
}: {
  variables: GetTokenPriceRequestType
  options?: Omit<
    UseQueryOptions<GetTokenPriceResponseType<TokenId, Currency>>,
    'queryKey' | 'queryFn'
  >
}) => {
  return useQuery<GetTokenPriceResponseType<TokenId, Currency>>(
    getTokenPriceQueryKey({ ids, vs_currencies }),
    () => getTokenPrice({ ids, vs_currencies }),
    options
  )
}
