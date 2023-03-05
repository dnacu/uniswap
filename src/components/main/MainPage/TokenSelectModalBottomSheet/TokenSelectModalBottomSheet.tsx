import { HStack } from '@components/common/HStack'
import { ModalBottomSheet } from '@components/common/ModalBottomSheet'
import { CloseIcon } from '@components/common/svgs/CloseIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { FC, useState } from 'react'
import styled from 'styled-components'
import { TokenType } from 'types/Token'
import { useRecentlyUsedTokenList } from '../hooks/useRecentlyUsedTokenList'
import { RecentlySelectedTokenList } from '../RecentlySelectedTokenList'
import { SearchResultTokenList } from '../SearchResultTokenList'
import { TokenSearchInput } from '../TokenSearchInput'

type TokenSelectModalBottomSheetProps = {
  opened: boolean
  onClose: () => void
  onSelectToken: (selectedToken: TokenType) => void
}

export const TokenSelectModalBottomSheet: FC<TokenSelectModalBottomSheetProps> = ({
  opened,
  onClose,
  onSelectToken,
}) => {
  const { addRecentlyUsedToken } = useRecentlyUsedTokenList()
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleSelectToken = (selectedToken: TokenType) => {
    addRecentlyUsedToken(selectedToken)
    onSelectToken(selectedToken)
    onClose()
  }

  return (
    <ModalBottomSheet
      opened={opened}
      onClose={onClose}
      renderContent={() => (
        <VStack>
          <VStack p={20} gap={20}>
            <HStack align="center" justify="space-between">
              <Typography size={16} weight={500} color="white">
                토큰 선택
              </Typography>
              <StyledCloseIcon onClick={onClose} />
            </HStack>
            <TokenSearchInput onChange={setSearchKeyword} />
            <RecentlySelectedTokenList />
          </VStack>

          <Divider />

          <SearchResultTokenList query={searchKeyword} onSelect={handleSelectToken} />
        </VStack>
      )}
    />
  )
}

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(27, 34, 54);
`
