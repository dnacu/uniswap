import { Stack, StackProps } from '../Stack/Stack'

type VStackProps = Omit<StackProps, 'direction'>

export const VStack = (props: VStackProps) => <Stack direction="column" {...props} />
