import { Container } from '@components/common/Container'
import { HStack } from '@components/common/HStack'
import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import { SettingIcon } from '@components/common/svgs/SettingIcon'
import { Typography } from '@components/common/Typography'
import { VStack } from '@components/common/VStack'
import styled from 'styled-components'
import { TokenInputCard } from './TokenInputCard'

export const MainPage = () => {
  const showPrepareAlert = () => {
    alert('준비 중입니다')
  }

  return (
    <Container as="main" size="sm" pt={140}>
      <Paper p={8} height={600} radius={16} bgColor="rgb(13, 17, 28)" borderColor="rgb(27, 34, 54)">
        <HStack px={12} py={8} justify="space-between">
          <Typography size={16} weight={500} color="white">
            스왑
          </Typography>
          <StyledSettingIcon onClick={showPrepareAlert} />
        </HStack>

        <Space height={8} />

        <VStack gap={4}>
          <TokenInputCard key="prev" />
          <TokenInputCard key="next" />
        </VStack>
      </Paper>
    </Container>
  )
}

const StyledSettingIcon = styled(SettingIcon)`
  cursor: pointer;
`
