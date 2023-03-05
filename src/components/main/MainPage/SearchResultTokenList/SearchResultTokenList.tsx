import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { TokenType } from 'types/Token'
import { useSearchToken } from '../hooks/useSearchToken'
import { useTokenSwap } from '../hooks/useTokenSwap'

type SearchResultTokenListProps = {
  query: string
  onSelect: (selectedToken: TokenType) => void
}

export const SearchResultTokenList: FC<SearchResultTokenListProps> = ({ query, onSelect }) => {
  const { tokens } = useSearchToken(query)
  const { prevToken, nextToken } = useTokenSwap()

  const handleSelect = (token: TokenType) => () => {
    onSelect(token)
  }

  const getIsAlreadySelected = (token: TokenType) => {
    return [prevToken.id, nextToken.id].includes(token.id)
  }

  return (
    <VStack height={370} overflowY="scroll" hideScroll={true}>
      {tokens.map((token) => (
        <StyledToken
          key={token.id}
          py={16}
          px={20}
          selected={getIsAlreadySelected(token)}
          onClick={handleSelect(token)}
        >
          <Typography size={16} weight={500} color="white">
            {token.symbol}
          </Typography>
        </StyledToken>
      ))}
    </VStack>
  )
}

const StyledToken = styled(VStack)<{ selected: boolean }>`
  cursor: pointer;

  &:hover {
    background-color: rgba(184, 192, 220, 0.08);
  }

  ${({ selected }) =>
    selected &&
    css`
      opacity: 0.5;
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    `}
`
