import { useCallback, useState } from 'react'

export type UseModalStateResult = {
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  toggleModal: () => void
}

export const useModalState = (defaultOpened = false): UseModalStateResult => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpened)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  }
}
