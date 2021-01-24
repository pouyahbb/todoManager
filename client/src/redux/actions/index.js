import { OPEN_MODAL } from './actionTypes'

export const openModal = (isOpen) => {
  return {
    type : OPEN_MODAL,
    payload : isOpen
  }
}