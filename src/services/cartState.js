import create from "zustand";

// shared state hook
const useStore = create(set => ({
  cart: [],
  addCard: card => set(state => ({ cart: [ ...state.cart, card ] })),
  removeCard: id => set(state => ({
    cart: state.cart.filter(item => item.id !== id),
  })),
}));

export default useStore;