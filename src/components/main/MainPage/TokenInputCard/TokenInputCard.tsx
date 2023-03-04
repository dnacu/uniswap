import { HStack } from '@components/common/HStack'
import { ModalBottomSheet } from '@components/common/ModalBottomSheet'
import { Paper } from '@components/common/Paper'
import { CloseIcon } from '@components/common/svgs/CloseIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { FC } from 'react'
import styled from 'styled-components'
import { RecentlySelectedTokenList } from '../RecentlySelectedTokenList'
import { TokenInput } from '../TokenInput/TokenInput'
import { TokenSearchInput } from '../TokenSearchInput'
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
          renderContent={({ close }) => (
            <VStack>
              <VStack p={20} gap={20}>
                <HStack align="center" justify="space-between">
                  <Typography size={16} weight={500} color="white">
                    토큰 선택
                  </Typography>
                  <CloseIcon onClick={close} />
                </HStack>
                <TokenSearchInput />
                <RecentlySelectedTokenList />
              </VStack>
              <Divider />
            </VStack>
          )}
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(27, 34, 54);
`
