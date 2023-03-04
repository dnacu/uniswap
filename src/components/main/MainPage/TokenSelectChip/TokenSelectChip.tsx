import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { ArrowDownIcon } from '@components/common/svgs/ArrowDownIcon'
import { Typography } from '@components/common/Typography'
import { FC } from 'react'

type TokenSelectChipProps = {
  className?: string
  onClick?: () => void
}

export const TokenSelectChip: FC<TokenSelectChipProps> = ({ className, onClick }) => {
  return (
    <Paper
      className={className}
      as="button"
      py={4}
      px={8}
      radius={16}
      bgColor="rgb(41, 50, 73)"
      onClick={onClick}
    >
      <HStack gap={8} align="center">
        <Typography size={20} weight={600} color="white">
          USDT
        </Typography>
        <ArrowDownIcon />
      </HStack>
    </Paper>
  )
}
