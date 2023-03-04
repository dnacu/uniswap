import { Stack, StackProps } from '../Stack/Stack'

type HStackProps = Omit<StackProps, 'direction'>

export const HStack = (props: HStackProps) => <Stack direction="row" {...props} />
