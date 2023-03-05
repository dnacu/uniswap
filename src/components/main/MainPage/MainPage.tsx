import { Container } from '@components/common/Container'
import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import { SettingIcon } from '@components/common/svgs/SettingIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { showPrepareAlert } from '@utils/showPrepareAlert'
import styled from 'styled-components'
import { useTokenPrice } from './hooks/useTokenPrice'
import { TokenInputCard } from './TokenInputCard'

export const MainPage = () => {
  const {
    prevToken,
    nextToken,
    setPrevToken,
    setNextToken,
    setPrevTokenAmount,
    setNextTokenAmount,
  } = useTokenPrice()

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
            <TokenInputCard
              key="prev"
              token={prevToken}
              onTokenChange={setPrevToken}
              onTokenAmountChange={setPrevTokenAmount}
            />
            <TokenInputCard
              key="next"
              token={nextToken}
              onTokenChange={setNextToken}
              onTokenAmountChange={setNextTokenAmount}
            />
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
