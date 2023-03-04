import { useControlledState } from '@hooks/useControlledState'
import { useLazyUnmount } from '@hooks/useLazyUnmount'
import { useLockBodyScroll } from '@hooks/useLockBodyScroll'
import { DEVICE_MEDIA } from '@styles/core/breakpoints'
import { FC, ReactElement } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Dimmer } from '../Dimmer'
import { Portal } from '../Portal'

const MODAL_ANIMATION_DURATION_MS = 300

type ModalBottomSheetProps = {
  className?: string
  opened?: boolean
  onClose?: () => void
  renderOpener?: (_: { open: () => void }) => ReactElement
  renderContent: (_: { close: () => void }) => ReactElement
}

export const ModalBottomSheet: FC<ModalBottomSheetProps> = ({
  className,
  opened: openedProp,
  onClose,
  renderOpener,
  renderContent,
}) => {
  const [opened, setOpenedIfUncontrolled] = useControlledState<boolean>({
    controlled: openedProp,
    default: false,
  })

  useLockBodyScroll()
  const isMounted = useLazyUnmount(opened, MODAL_ANIMATION_DURATION_MS)

  const close = () => {
    setOpenedIfUncontrolled(false)
    onClose?.()
  }

  return (
    <>
      {renderOpener?.({ open: () => setOpenedIfUncontrolled(true) })}
      {isMounted && (
        <Portal id="modal">
          <div className={className}>
            <StyledDimmer opacity={0.2} onClick={close} open={opened} />
            <StyledModalContent open={opened}>{renderContent({ close: close })}</StyledModalContent>
          </div>
        </Portal>
      )}
    </>
  )
}

const fadeAnimation = (startOpacity: number, endOpacity: number) => keyframes`
    from {
      opacity: ${startOpacity};
    }
    to {
      opacity: ${endOpacity};
    }
`

const slideAnimation = (
  startX: number | string,
  startY: number | string,
  endX: number | string,
  endY: number | string
) => keyframes`
  from {
    transform: translate(${startX}, ${startY});
  }
  to {
    transform: translate(${endX}, ${endY});
  }
`

const StyledDimmer = styled(Dimmer)<{ open: boolean }>`
  ${({ open }) =>
    css`
      animation-name: ${!open ? fadeAnimation(0.5, 0) : fadeAnimation(0, 0.5)};
    `}

  animation-duration: ${MODAL_ANIMATION_DURATION_MS}ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
`

const StyledModalContent = styled.div<{ open: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 460px;
  height: 600px;
  background-color: rgb(13, 17, 28);
  border: 1px solid rgb(27, 34, 54);
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 24%) 12px 16px 24px, rgb(0 0 0 / 24%) 12px 8px 12px,
    rgb(0 0 0 / 32%) 4px 4px 8px;

  ${({ open }) =>
    css`
      animation-name: ${open ? fadeAnimation(0, 1) : fadeAnimation(1, 0)};
    `}

  animation-duration: ${MODAL_ANIMATION_DURATION_MS}ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  @media ${DEVICE_MEDIA.MOBILE} {
    width: 100%;
    max-height: 80vh;
    top: auto;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 20px 20px 0 0;

    ${({ open }) =>
      css`
        animation-name: ${open ? slideAnimation(0, '100%', 0, 0) : slideAnimation(0, 0, 0, '100%')};
      `}
  }
`
