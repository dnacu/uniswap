import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { useModalState } from '@hooks/useModalState'
import { FC } from 'react'
import styled from 'styled-components'
import { TokenType } from 'types/Token'
import { TokenPriceType } from '../hooks/useTokenPrice'
import { TokenAmountInput } from '../TokenAmountInput/TokenAmountInput'
import { TokenSelectChip } from '../TokenSelectChip'
import { TokenSelectModalBottomSheet } from '../TokenSelectModalBottomSheet/TokenSelectModalBottomSheet'

type TokenInputCardProps = {
  className?: string
  token: TokenPriceType
  onTokenChange: (token: TokenType) => void
  onTokenAmountChange: (amount: string) => void
}

export const TokenInputCard: FC<TokenInputCardProps> = ({
  className,
  token,
  onTokenChange,
  onTokenAmountChange,
}) => {
  const { isModalOpen, openModal, closeModal } = useModalState()

  return (
    <StyledPaper className={className} p={16} radius={12} bgColor="rgb(19, 26, 42)">
      <VStack gap={8}>
        <HStack align="center" justify="space-between">
          <StyledTokenInput amount={token.amount} onChange={onTokenAmountChange} />
          <StyledTokenSelectChip selectedToken={token} onClick={openModal} />
        </HStack>
        <VStack>
          <Typography size={14} color="rgb(152, 161, 192)">
            ${token.totalPrice}
          </Typography>
        </VStack>
      </VStack>
      <TokenSelectModalBottomSheet
        opened={isModalOpen}
        onClose={closeModal}
        onSelectToken={onTokenChange}
      />
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)`
  position: relative;
`

const StyledTokenInput = styled(TokenAmountInput)`
  width: 100%;
`

const StyledTokenSelectChip = styled(TokenSelectChip)`
  flex-shrink: 0;
`
