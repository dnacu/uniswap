import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Typography } from '@components/common/Typography'
import { TokenType } from 'types/Token'
import { useRecentlyUsedTokenList } from '../hooks/useRecentlyUsedTokenList'

export const RecentlySelectedTokenList = () => {
  const { recentlyUsedTokenList } = useRecentlyUsedTokenList()

  return (
    <HStack gap={8} height={83} wrap="wrap">
      {recentlyUsedTokenList.map((token: TokenType) => (
        <Paper key={token.id} px={12} py={8} radius={20} borderColor="rgb(27, 34, 54)">
          <Typography size={16} weight={500} color="white">
            {token.symbol.toUpperCase()}
          </Typography>
        </Paper>
      ))}
    </HStack>
  )
}
