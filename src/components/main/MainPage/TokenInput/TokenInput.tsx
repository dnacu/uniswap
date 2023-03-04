import { FC, useState } from 'react'
import styled from 'styled-components'

const MAX_DECIMAL_POINT = 10

type TokenInputProps = {
  className?: string
}

export const TokenInput: FC<TokenInputProps> = ({ className }) => {
  const [tokenAmount, setTokenAmount] = useState('')

  const checkIfOverMaxDecimalPoint = (value: string) => {
    return value.split('.')[1]?.length > MAX_DECIMAL_POINT
  }

  const handleTokenAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (checkIfOverMaxDecimalPoint(value)) {
      return
    }

    setTokenAmount(value)
  }

  return (
    <StyledInput
      className={className}
      type="number"
      inputMode="decimal"
      placeholder="0"
      step="0.0000000001"
      value={tokenAmount}
      onChange={handleTokenAmountChange}
    />
  )
}

export const StyledInput = styled.input`
  font-size: 36px;
  line-height: 44px;
  color: rgb(255, 255, 255);

  outline: none;
  border: none;
  background-color: transparent;
`
