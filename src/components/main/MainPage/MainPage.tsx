import { Container } from '@components/common/Container'
import { Paper } from '@components/common/Paper'
import { Space } from '@components/common/Space'
import { Typography } from '@components/common/Typography'
import styled from 'styled-components'
import { TokenInputCard } from './TokenInputCard'

export const MainPage = () => (
  <Container as="main" size="sm" pt={140}>
    <Paper p={8} height={600} radius={16} bgColor="rgb(13, 17, 28)" borderColor="rgb(27, 34, 54)">
      <Paper px={12} py={8}>
        <Typography size={16} weight={500} color="white">
          스왑
        </Typography>
      </Paper>

      <Space height={8} />

      <div>
        <TokenInputCard key="prev" />
        <TokenInputCard key="next" />
      </div>
    </Paper>
  </Container>
)
