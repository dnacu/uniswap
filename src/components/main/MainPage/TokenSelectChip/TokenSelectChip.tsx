import { HStack } from '@components/common/HStack'
import { ArrowDownIcon } from '@components/common/svgs/ArrowDownIcon'
import { Typography } from '@components/common/Typography'
import { FC } from 'react'
import styled from 'styled-components'
import { TokenType } from 'types/Token'

type TokenSelectChipProps = {
  className?: string
  selectedToken: TokenType
  onClick?: () => void
}

export const TokenSelectChip: FC<TokenSelectChipProps> = ({
  className,
  selectedToken,
  onClick,
}) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      <HStack gap={8} align="center">
        <Typography size={20} weight={600} color="white">
          {selectedToken.symbol}
        </Typography>
        <ArrowDownIcon />
      </HStack>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 4px 8px;
  border-radius: 16px;
  background-color: rgb(41, 50, 73);
`
