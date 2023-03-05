import { HStack } from '@components/common/HStack'
import { ModalBottomSheet } from '@components/common/ModalBottomSheet'
import { CloseIcon } from '@components/common/svgs/CloseIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { showPrepareAlert } from '@utils/showPrepareAlert'
import { FC, useEffect, useState } from 'react'
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

  useEffect(() => {
    if (opened) {
      setSearchKeyword('')
    }
  }, [opened])

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
            <RecentlySelectedTokenList onSelect={handleSelectToken} />
          </VStack>

          <Divider />

          <SearchResultTokenList query={searchKeyword} onSelect={handleSelectToken} />

          <VStack>
            <Divider />
            <StyledButton onClick={showPrepareAlert}>
              <Typography size={16} color="rgb(76, 130, 251)">
                토큰 목록 관리
              </Typography>
            </StyledButton>
          </VStack>
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

const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: rgb(19, 26, 42);
`
