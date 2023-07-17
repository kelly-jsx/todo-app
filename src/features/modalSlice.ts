import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  modal: any
  showModal: boolean
}

const initialState = {
  showModal: false,
} as ModalState

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal
    },
  },
})

export const { toggleModal } = modalSlice.actions

export default modalSlice.reducer
