import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { VStack } from '@components/common/VStack'
import { tokenList } from '@constants/tokenList'
import { useModalState } from '@hooks/useModalState'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { SymbolType, TokenType } from 'types/Token'
import { TokenInput } from '../TokenInput/TokenInput'
import { TokenSelectChip } from '../TokenSelectChip'
import { TokenSelectModalBottomSheet } from '../TokenSelectModalBottomSheet/TokenSelectModalBottomSheet'

type TokenInputCardProps = {
  className?: string
  defaultTokenSymbol: SymbolType
}

export const TokenInputCard: FC<TokenInputCardProps> = ({ className, defaultTokenSymbol }) => {
  const [token, setToken] = useState<TokenType>(
    tokenList.find((token) => token.symbol === defaultTokenSymbol) ?? tokenList[0]
  )
  const { isModalOpen, openModal, closeModal } = useModalState()

  const handleSelectToken = (selectedToken: TokenType) => {
    setToken(selectedToken)
  }

  return (
    <StyledPaper className={className} p={16} radius={12} bgColor="rgb(19, 26, 42)">
      <VStack gap={8}>
        <HStack align="center" justify="space-between">
          <StyledTokenInput />
          <StyledTokenSelectChip selectedToken={token} onClick={openModal} />
          <TokenSelectModalBottomSheet
            opened={isModalOpen}
            onClose={closeModal}
            onSelectToken={handleSelectToken}
          />
        </HStack>
      </VStack>
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)`
  position: relative;
`

const StyledTokenInput = styled(TokenInput)`
  width: 100%;
`

const StyledTokenSelectChip = styled(TokenSelectChip)`
  flex-shrink: 0;
`
