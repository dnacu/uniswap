import { Container } from '@components/common/Container'
import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import { SettingIcon } from '@components/common/svgs/SettingIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { tokenList } from '@constants/tokenList'
import styled from 'styled-components'
import { TokenInputCard } from './TokenInputCard'

export const MainPage = () => {
  const showPrepareAlert = () => {
    alert('준비 중입니다')
  }

  return (
    <Container as="main" size="sm" pt={140}>
      <Paper px={12} py={20} radius={16} bgColor="rgb(13, 17, 28)" borderColor="rgb(27, 34, 54)">
        <HStack px={12} py={8} justify="space-between">
          <Typography size={16} weight={500} color="white">
            스왑
          </Typography>
          <StyledSettingIcon onClick={showPrepareAlert} />
        </HStack>

        <Space height={8} />

        <VStack gap={32}>
          <VStack gap={4}>
            <TokenInputCard key="prev" defaultTokenSymbol="DAI" />
            <TokenInputCard key="next" defaultTokenSymbol="USDC" />
          </VStack>
          <Paper as="button" p={16} radius={20} bgColor="rgb(76, 130, 251)">
            <Typography size={16} color="white">
              스왑
            </Typography>
          </Paper>
        </VStack>
      </Paper>
    </Container>
  )
}

const StyledSettingIcon = styled(SettingIcon)`
  cursor: pointer;
`
