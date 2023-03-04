import { HStack } from '@components/common/HStack'
import { ModalBottomSheet } from '@components/common/ModalBottomSheet'
import { CloseIcon } from '@components/common/svgs/CloseIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { FC } from 'react'
import styled from 'styled-components'
import { RecentlySelectedTokenList } from '../RecentlySelectedTokenList'
import { TokenSearchInput } from '../TokenSearchInput'

type TokenSelectModalBottomSheetProps = {
  opened: boolean
  onClose: () => void
}

export const TokenSelectModalBottomSheet: FC<TokenSelectModalBottomSheetProps> = ({
  opened,
  onClose,
}) => {
  return (
    <ModalBottomSheet
      opened={opened}
      renderContent={() => (
        <VStack>
          <VStack p={20} gap={20}>
            <HStack align="center" justify="space-between">
              <Typography size={16} weight={500} color="white">
                토큰 선택
              </Typography>
              <CloseIcon onClick={onClose} />
            </HStack>
            <TokenSearchInput />
            <RecentlySelectedTokenList />
          </VStack>
          <Divider />
        </VStack>
      )}
    />
  )
}

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(27, 34, 54);
`
