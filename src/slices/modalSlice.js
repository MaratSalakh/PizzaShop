import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsOpen: true,
};

const modalSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    openModal: (state) => {
      document.body.classList.add('scrollLock');
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      document.body.classList.remove('scrollLock');
      state.modalIsOpen = false;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
