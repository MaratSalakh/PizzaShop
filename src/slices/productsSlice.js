import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    pizza1: { id: 'pizza1', count: 0, price: 10, img: './src/assets/1pizza.jpg', name: 'Pepperoni Pizza', modalIsOpen: false, description: 'A classic Pepperoni Pizza with a rich, tangy sauce and a generous layer of cheese.' },
    pizza2: { id: 'pizza2', count: 0, price: 15, img: './src/assets/2pizza.jpg', name: 'Margherita Pizza', modalIsOpen: false, description: 'A delicious Margherita Pizza, perfect for those who love a balance of tomato, mozzarella, and basil.' },
    pizza3: { id: 'pizza3', count: 0, price: 12, img: './src/assets/3pizza.jpg', name: 'BBQ Chicken Pizza', modalIsOpen: false, description: 'Our BBQ Chicken Pizza is a must-try. Grilled chicken, tangy BBQ sauce, and a perfect crust.' },
    pizza4: { id: 'pizza4', count: 0, price: 14, img: './src/assets/4pizza.jpg', name: 'Cheese Delight Pizza', modalIsOpen: false, description: 'A delightful cheese pizza for cheese lovers. Layered with a creamy cheese, it\'s a heavenly experience.' },
    pizza5: { id: 'pizza5', count: 0, price: 15, img: './src/assets/5pizza.jpg', name: 'Veggie Paradise Pizza', modalIsOpen: false, description: 'A pizza paradise for vegetable lovers. Packed with fresh vegetables and a flavorful sauce.' },
    pizza6: { id: 'pizza6', count: 0, price: 15, img: './src/assets/6pizza.jpg', name: 'Hawaiian Dream Pizza', modalIsOpen: false, description: 'A dreamy Hawaiian pizza for all. With sweet pineapple, tangy ham, and a hint of cheese.' },
    pizza7: { id: 'pizza7', count: 0, price: 20, img: './src/assets/7pizza.jpg', name: 'Pepperoni Extravaganza Pizza', modalIsOpen: false, description: 'An extravagant pepperoni pizza for all. Layered with pepperoni, mushrooms, and a tangy sauce.' },
    pizza8: { id: 'pizza8', count: 0, price: 25, img: './src/assets/8pizza.jpg', name: 'Margherita Delight Pizza', modalIsOpen: false, description: 'A delightful margherita pizza for all. With a generous layer of mozzarella and fresh basil.' },
    pizza9: { id: 'pizza9', count: 0, price: 15, img: './src/assets/1pizza.jpg', name: 'BBQ Chicken Paradise Pizza', modalIsOpen: false, description: 'A paradise for BBQ Chicken pizza lovers. Grilled chicken, tangy BBQ sauce, and a perfect crust.' },
    pizza10: { id: 'pizza10', count: 0, price: 17, img: './src/assets/2pizza.jpg', name: 'Cheese Dream Pizza', modalIsOpen: false, description: 'A dreamy cheese pizza for all. Layered with a creamy cheese, it\'s a heavenly experience.' },
    pizza11: { id: 'pizza11', count: 0, price: 16, img: './src/assets/3pizza.jpg', name: 'Veggie Extravaganza Pizza', modalIsOpen: false, description: 'An extravagant vegetable pizza for all. Packed with fresh vegetables and a flavorful sauce.' },
    pizza12: { id: 'pizza12', count: 0, price: 14, img: './src/assets/4pizza.jpg', name: 'Hawaiian Delight Pizza', modalIsOpen: false, description: 'A delightful Hawaiian pizza for all. With sweet pineapple, tangy ham, and a hint of cheese.' },
    pizza13: { id: 'pizza13', count: 0, price: 14, img: './src/assets/5pizza.jpg', name: 'Pepperoni Dream Pizza', modalIsOpen: false, description: 'A dreamy pepperoni pizza for all. Layered with pepperoni, mushrooms, and a tangy sauce.' },
    pizza14: { id: 'pizza14', count: 0, price: 15, img: './src/assets/6pizza.jpg', name: 'Margherita Extravaganza Pizza', modalIsOpen: false, description: 'An extravagant margherita pizza for all. With a generous layer of mozzarella and fresh basil.' },
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
      state.entities[action.payload].modalIsOpen = false;
    }
  },
});

export const { countPlus, countMinus, resetCount, openModal, closeModal } = productsSlice.actions;

export default productsSlice.reducer;
