import { Container } from '@components/common/Container'
import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import { SettingIcon } from '@components/common/svgs/SettingIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import { numberWithCommas } from '@utils/numberWithCommas'
import { showPrepareAlert } from '@utils/showPrepareAlert'
import styled from 'styled-components'
import { useTokenSwap } from './hooks/useTokenSwap'
import { TokenInputCard } from './TokenInputCard'

export const MainPage = () => {
  const {
    prevToken,
    nextToken,
    exchangeRate,
    setPrevToken,
    setNextToken,
    setPrevTokenAmount,
    setNextTokenAmount,
  } = useTokenSwap()

  const isSwapButtonActive = parseFloat(prevToken.amount) > 0 && parseFloat(nextToken.amount) > 0

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
            {exchangeRate && (
              <Paper
                px={12}
                py={8}
                radius={12}
                bgColor="rgb(19, 26, 42)"
                borderColor="rgb(27, 34, 54)"
              >
                <Typography size={14} color="white">
                  {`1 ${nextToken.symbol} = ${exchangeRate} ${prevToken.symbol}`}
                  <Typography as="span" size={14} color="gray">
                    &nbsp;(${numberWithCommas(nextToken.tokenPrice, 10)})
                  </Typography>
                </Typography>
              </Paper>
            )}
          </VStack>
          <StyledButton onClick={showPrepareAlert} disabled={!isSwapButtonActive}>
            <Typography size={16} color="white">
              스왑
            </Typography>
          </StyledButton>
        </VStack>
      </Paper>
    </Container>
  )
}

const StyledSettingIcon = styled(SettingIcon)`
  cursor: pointer;
`

const StyledButton = styled.button`
  padding: 16px;
  border-radius: 20px;
  background-color: rgb(76, 130, 251);

  &:disabled {
    background-color: gray;
  }
`
