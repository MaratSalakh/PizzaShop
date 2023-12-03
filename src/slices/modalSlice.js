import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: false,
};

const modalSlice = createSlice({
  name: 'modalIsOpen',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalState = true;
    },
    closeModal: (state) => {
      state.modalState = false;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
