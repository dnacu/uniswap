import { HStack } from '@components/common/HStack'
import { ModalBottomSheet } from '@components/common/ModalBottomSheet'
import { Paper } from '@components/common/Paper'
import { VStack } from '@components/common/VStack'
import { FC } from 'react'
import styled from 'styled-components'
import { TokenInput } from '../TokenInput/TokenInput'
import { TokenSelectChip } from '../TokenSelectChip'

type TokenInputCardProps = {
  className?: string
}

export const TokenInputCard: FC<TokenInputCardProps> = ({ className }) => (
  <StyledPaper className={className} p={16} radius={12} bgColor="rgb(19, 26, 42)">
    <VStack gap={8}>
      <HStack align="center" justify="space-between">
        <StyledTokenInput />
        <ModalBottomSheet
          renderOpener={({ open }) => <StyledTokenSelectChip onClick={open} />}
          renderContent={() => <div>asdasdasdasdasd</div>}
        />
      </HStack>
    </VStack>
  </StyledPaper>
)

const StyledPaper = styled(Paper)`
  position: relative;
`

const StyledTokenInput = styled(TokenInput)`
  width: 100%;
`

const StyledTokenSelectChip = styled(TokenSelectChip)`
  flex-shrink: 0;
`
