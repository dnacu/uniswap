import { Paper } from '@components/common/Paper'
import { FC } from 'react'
import styled from 'styled-components'
import { TokenInput } from '../TokenInput/TokenInput'

type TokenInputCardProps = {}

export const TokenInputCard: FC<TokenInputCardProps> = () => {
  return (
    <StyledPaper p={16} radius={12} bgColor="rgb(19, 26, 42)">
      <TokenInput />
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)`
  position: relative;
`
