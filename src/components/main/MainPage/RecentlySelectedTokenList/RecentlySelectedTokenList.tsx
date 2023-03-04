import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Typography } from '@components/common/Typography'
import { FC, useState } from 'react'
import { TokenType } from 'types/Token'
import { useRecentlyUsedTokenList } from '../hooks/useRecentlyUsedTokenList'

type RecentlySelectedTokenListProps = {}

export const RecentlySelectedTokenList: FC<RecentlySelectedTokenListProps> = () => {
  const { recentlyUsedTokenList } = useRecentlyUsedTokenList()

  return (
    <HStack gap={8} height={83} wrap="wrap">
      {recentlyUsedTokenList.map((token: TokenType) => (
        <Paper px={12} py={8} radius={20} borderColor="rgb(27, 34, 54)">
          <Typography size={16} weight={500} color="white">
            {token.symbol.toUpperCase()}
          </Typography>
        </Paper>
      ))}
    </HStack>
  )
}
