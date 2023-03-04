import { HStack } from '@components/common/HStack'
import { ModalBottomSheet } from '@components/common/ModalBottomSheet'
import { Paper } from '@components/common/Paper'
import { CloseIcon } from '@components/common/svgs/CloseIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { useModalState } from '@hooks/useModalState'
import { FC } from 'react'
import styled from 'styled-components'
import { RecentlySelectedTokenList } from '../RecentlySelectedTokenList'
import { TokenInput } from '../TokenInput/TokenInput'
import { TokenSearchInput } from '../TokenSearchInput'
import { TokenSelectChip } from '../TokenSelectChip'
import { TokenSelectModalBottomSheet } from '../TokenSelectModalBottomSheet/TokenSelectModalBottomSheet'

type TokenInputCardProps = {
  className?: string
}

export const TokenInputCard: FC<TokenInputCardProps> = ({ className }) => {
  const { isModalOpen, openModal, closeModal } = useModalState()
  return (
    <StyledPaper className={className} p={16} radius={12} bgColor="rgb(19, 26, 42)">
      <VStack gap={8}>
        <HStack align="center" justify="space-between">
          <StyledTokenInput />
          <StyledTokenSelectChip onClick={openModal} />
          <TokenSelectModalBottomSheet opened={isModalOpen} onClose={closeModal} />
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
