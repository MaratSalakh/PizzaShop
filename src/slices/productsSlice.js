import { createSlice } from "@reduxjs/toolkit";
import { imgs } from "../assets/paths.js";

const initialState = {
  entities: {
    pizza1: {
      id: "pizza1",
      count: 0,
      price: 10,
      img: imgs.urlImg1,
      name: "Pepperoni Pizza",
      modalIsOpen: false,
      description:
        "A classic Pepperoni Pizza with a rich, tangy sauce and a generous layer of cheese.",
      size: "big",
    },
    pizza2: {
      id: "pizza2",
      count: 0,
      price: 15,
      img: imgs.urlImg2,
      name: "Margherita Pizza",
      modalIsOpen: false,
      description:
        "A delicious Margherita Pizza, perfect for those who love a balance of tomato, mozzarella, and basil.",
      size: "big",
    },
    pizza3: {
      id: "pizza3",
      count: 0,
      price: 12,
      img: imgs.urlImg3,
      name: "BBQ Chicken Pizza",
      modalIsOpen: false,
      description:
        "Our BBQ Chicken Pizza is a must-try. Grilled chicken, tangy BBQ sauce, and a perfect crust.",
      size: "big",
    },
    pizza4: {
      id: "pizza4",
      count: 0,
      price: 14,
      img: imgs.urlImg4,
      name: "Cheese Delight Pizza",
      modalIsOpen: false,
      description:
        "A delightful cheese pizza for cheese lovers. Layered with a creamy cheese, it's a heavenly experience.",
      size: "big",
    },
    pizza5: {
      id: "pizza5",
      count: 0,
      price: 15,
      img: imgs.urlImg5,
      name: "Veggie Paradise Pizza",
      modalIsOpen: false,
      description:
        "A pizza paradise for vegetable lovers. Packed with fresh vegetables and a flavorful sauce.",
      size: "big",
    },
    pizza6: {
      id: "pizza6",
      count: 0,
      price: 15,
      img: imgs.urlImg6,
      name: "Hawaiian Dream Pizza",
      modalIsOpen: false,
      description:
        "A dreamy Hawaiian pizza for all. With sweet pineapple, tangy ham, and a hint of cheese.",
      size: "big",
    },
    pizza7: {
      id: "pizza7",
      count: 0,
      price: 20,
      img: imgs.urlImg7,
      name: "Pepperoni Extravaganza Pizza",
      modalIsOpen: false,
      description:
        "An extravagant pepperoni pizza for all. Layered with pepperoni, mushrooms, and a tangy sauce.",
      size: "big",
    },
    pizza8: {
      id: "pizza8",
      count: 0,
      price: 25,
      img: imgs.urlImg8,
      name: "Margherita Delight Pizza",
      modalIsOpen: false,
      description:
        "A delightful margherita pizza for all. With a generous layer of mozzarella and fresh basil.",
      size: "big",
    },
    pizza9: {
      id: "pizza9",
      count: 0,
      price: 15,
      img: imgs.urlImg1,
      name: "BBQ Chicken Paradise Pizza",
      modalIsOpen: false,
      description:
        "A paradise for BBQ Chicken pizza lovers. Grilled chicken, tangy BBQ sauce, and a perfect crust.",
      size: "big",
    },
    pizza10: {
      id: "pizza10",
      count: 0,
      price: 17,
      img: imgs.urlImg2,
      name: "Cheese Dream Pizza",
      modalIsOpen: false,
      description:
        "A dreamy cheese pizza for all. Layered with a creamy cheese, it's a heavenly experience.",
      size: "big",
    },
    pizza11: {
      id: "pizza11",
      count: 0,
      price: 16,
      img: imgs.urlImg3,
      name: "Veggie Extravaganza Pizza",
      modalIsOpen: false,
      description:
        "An extravagant vegetable pizza for all. Packed with fresh vegetables and a flavorful sauce.",
      size: "big",
    },
    pizza12: {
      id: "pizza12",
      count: 0,
      price: 14,
      img: imgs.urlImg4,
      name: "Hawaiian Delight Pizza",
      modalIsOpen: false,
      description:
        "A delightful Hawaiian pizza for all. With sweet pineapple, tangy ham, and a hint of cheese.",
      size: "big",
    },
    pizza13: {
      id: "pizza13",
      count: 0,
      price: 14,
      img: imgs.urlImg5,
      name: "Pepperoni Dream Pizza",
      modalIsOpen: false,
      description:
        "A dreamy pepperoni pizza for all. Layered with pepperoni, mushrooms, and a tangy sauce.",
      size: "big",
    },
    pizza14: {
      id: "pizza14",
      count: 0,
      price: 15,
      img: imgs.urlImg6,
      name: "Margherita Extravaganza Pizza",
      modalIsOpen: false,
      description:
        "An extravagant margherita pizza for all. With a generous layer of mozzarella and fresh basil.",
      size: "big",
    },
  },
  ids: [
    "pizza1",
    "pizza2",
    "pizza3",
    "pizza4",
    "pizza5",
    "pizza6",
    "pizza7",
    "pizza8",
    "pizza9",
    "pizza10",
    "pizza11",
    "pizza12",
    "pizza13",
    "pizza14",
  ],
};

const productsSlice = createSlice({
  name: "products",
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
      document.body.classList.add("scrollLock");
      state.entities[action.payload].modalIsOpen = true;
    },
    closeModal: (state, action) => {
      document.body.classList.remove("scrollLock");
      state.entities[action.payload].modalIsOpen = false;
    },
    setBigSize: (state, action) => {
      state.entities[action.payload].size = "big";
    },
    setMediumSize: (state, action) => {
      state.entities[action.payload].size = "medium";
    },
    setSmallSize: (state, action) => {
      state.entities[action.payload].size = "small";
    },
  },
});

export const {
  countPlus,
  countMinus,
  resetCount,
  openModal,
  closeModal,
  setSmallSize,
  setMediumSize,
  setBigSize,
} = productsSlice.actions;

export default productsSlice.reducer;
