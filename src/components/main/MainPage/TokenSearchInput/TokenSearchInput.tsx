import { SearchIcon } from '@components/common/svgs/SearchIcon'
import { VStack } from '@components/common/VStack'
import { FC } from 'react'
import styled from 'styled-components'

type TokenSearchInputProps = {
  className?: string
}

export const TokenSearchInput: FC<TokenSearchInputProps> = ({ className }) => {
  return (
    <StyledVStack>
      <StyledSearchIcon />
      <StyledInput className={className} type="text" placeholder="토큰 이름을 입력하세요" />
    </StyledVStack>
  )
}

const StyledVStack = styled(VStack)`
  position: relative;
`

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  left: 12px;
  top: 10px;
`

const StyledInput = styled.input`
  padding: 16px 16px 16px 40px;
  height: 40px;
  border: 1px solid rgb(27, 34, 54);
  border-radius: 12px;
  appearance: none;
  font-size: 16px;
  color: white;
  background-color: rgb(19, 26, 42);
`
