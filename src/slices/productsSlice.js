import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    pizza1: { id: 'pizza1', count: 0, price: 500, img: './src/assets/1.jpg', name: 'Pepperoni Pizza', modalIsOpen: false },
    pizza2: { id: 'pizza2', count: 0, price: 500, img: './src/assets/2.jpg', name: 'Margherita Pizza', modalIsOpen: false },
    pizza3: { id: 'pizza3', count: 0, price: 1500, img: './src/assets/3.jpg', name: 'BBQ Chicken Pizza', modalIsOpen: false },
    pizza4: { id: 'pizza4', count: 0, price: 120, img: './src/assets/4.jpg', name: 'Cheese Delight Pizza', modalIsOpen: false },
    pizza5: { id: 'pizza5', count: 0, price: 900, img: './src/assets/5.jpg', name: 'Veggie Paradise Pizza', modalIsOpen: false },
    pizza6: { id: 'pizza6', count: 0, price: 3432, img: './src/assets/6.jpg', name: 'Hawaiian Dream Pizza', modalIsOpen: false },
    pizza7: { id: 'pizza7', count: 0, price: 2300, img: './src/assets/7.jpg', name: 'Pepperoni Extravaganza Pizza', modalIsOpen: false },
    pizza8: { id: 'pizza8', count: 0, price: 1200, img: './src/assets/8.jpg', name: 'Margherita Delight Pizza', modalIsOpen: false },
    pizza9: { id: 'pizza9', count: 0, price: 1000, img: './src/assets/1.jpg', name: 'BBQ Chicken Paradise Pizza', modalIsOpen: false },
    pizza10: { id: 'pizza10', count: 0, price: 900, img: './src/assets/2.jpg', name: 'Cheese Dream Pizza', modalIsOpen: false },
    pizza11: { id: 'pizza11', count: 0, price: 800, img: './src/assets/3.jpg', name: 'Veggie Extravaganza Pizza', modalIsOpen: false },
    pizza12: { id: 'pizza12', count: 0, price: 700, img: './src/assets/4.jpg', name: 'Hawaiian Delight Pizza', modalIsOpen: false },
    pizza13: { id: 'pizza13', count: 0, price: 600, img: './src/assets/5.jpg', name: 'Pepperoni Dream Pizza', modalIsOpen: false },
    pizza14: { id: 'pizza14', count: 0, price: 400, img: './src/assets/6.jpg', name: 'Margherita Extravaganza Pizza', modalIsOpen: false },
  },
  ids: ['pizza1', 'pizza2', 'pizza3', 'pizza4', 'pizza5', 'pizza6', 'pizza7', 'pizza8', 'pizza9', 'pizza10', 'pizza11', 'pizza12', 'pizza13', 'pizza14',],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    countPlus: (state, action) => {
      state.entities[action.payload].count += 1;
    },
    countMinus: (state, action) => {
      state.entities[action.payload].count -= 1;
    },
    resetCount: (state, action) => {
      state.entities[action.payload].count = 0;
    },
    openModal: (state, action) => {
      document.body.classList.add('scrollLock');
      state.entities[action.payload].modalIsOpen = true;
    },
    closeModal: (state, action) => {
      document.body.classList.remove('scrollLock');
      state.entities[action.payload].modalIsOpen = true;
    }
  },
});

export const { countPlus, countMinus, resetCount, openModal, closeModal } = productsSlice.actions;

export default productsSlice.reducer;
