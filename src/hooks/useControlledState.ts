import { useCallback, useRef, useState } from 'react'

type UseControlledStateProps<StateType> = {
  controlled: StateType | undefined
  default: StateType
}

export const useControlledState = <StateType>({
  controlled,
  default: defaultProp,
}: UseControlledStateProps<StateType>): [StateType, (newValue: StateType) => void] => {
  const [valueState, setValueState] = useState<StateType>(defaultProp)
  const value = controlled ?? valueState

  const setValueIfUncontrolled = useCallback(
    (newValue: StateType) => {
      if (controlled === undefined) {
        setValueState(newValue)
      }
    },
    [controlled]
  )

  return [value, setValueIfUncontrolled]
}
