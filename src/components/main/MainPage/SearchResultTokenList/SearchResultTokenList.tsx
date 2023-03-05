import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { FC } from 'react'
import styled from 'styled-components'
import { TokenType } from 'types/Token'
import { useSearchToken } from '../hooks/useSearchToken'

type SearchResultTokenListProps = {
  query: string
  onSelect: (selectedToken: TokenType) => void
}

export const SearchResultTokenList: FC<SearchResultTokenListProps> = ({ query, onSelect }) => {
  const { tokens } = useSearchToken(query)

  const handleSelect = (token: TokenType) => () => {
    onSelect(token)
  }

  return (
    <VStack height={370} overflowY="scroll" hideScroll={true}>
      {tokens.map((token) => (
        <StyledVStack key={token.id} py={16} px={20} onClick={handleSelect(token)}>
          <Typography size={16} weight={500} color="white">
            {token.symbol}
          </Typography>
        </StyledVStack>
      ))}
    </VStack>
  )
}

const StyledVStack = styled(VStack)`
  cursor: pointer;

  &:hover {
    background-color: rgba(184, 192, 220, 0.08);
  }
`
