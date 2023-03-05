import { FC, ReactElement } from 'react'
import { createPortal } from 'react-dom'
import { findOrCreateElementById } from '@utils/findOrCreateElementById'

type PortalProps = {
  id: string
  children: ReactElement
}

export const Portal: FC<PortalProps> = ({ id, children }) =>
  createPortal(<div style={{ zIndex: 3000 }}>{children}</div>, findOrCreateElementById(id))
