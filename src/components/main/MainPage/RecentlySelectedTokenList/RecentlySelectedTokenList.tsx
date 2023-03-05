import { HStack } from '@components/common/HStack'
import { Typography } from '@components/common/Typography'
import { FC } from 'react'
import styled from 'styled-components'
import { TokenType } from 'types/Token'
import { useRecentlyUsedTokenList } from '../hooks/useRecentlyUsedTokenList'

type RecentlySelectedTokenListProps = {
  onSelect: (selectedToken: TokenType) => void
}

export const RecentlySelectedTokenList: FC<RecentlySelectedTokenListProps> = ({ onSelect }) => {
  const { recentlyUsedTokenList } = useRecentlyUsedTokenList()

  const handleSelect = (selectedToken: TokenType) => () => {
    onSelect(selectedToken)
  }

  return (
    <HStack gap={8} height={83} wrap="wrap">
      {recentlyUsedTokenList.map((token: TokenType) => (
        <StyledButton key={token.id} onClick={handleSelect(token)}>
          <Typography size={16} weight={500} color="white">
            {token.symbol.toUpperCase()}
          </Typography>
        </StyledButton>
      ))}
    </HStack>
  )
}

const StyledButton = styled.button`
  padding: 8px 12px;
  border-radius: 20px;
  background-color: rgb(27, 34, 54);
`
