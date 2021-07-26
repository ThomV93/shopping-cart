import create from "zustand";

// shared state hook
const useStore = create((set, get) => ({
  // initial cart array
  cart: [],
  // add cart to array
  addCard: card => set(state => ({ cart: [ ...state.cart, card ] })),
  // remove card from array
  removeCard: id => set(state => ({
    cart: state.cart.filter(item => item.id !== id),
  })),
  // increase the amount of a card
  increaseAmount: idx => {
    const cart = get().cart;
    cart[idx].amount++;
    set(state => ({
      cart: [...state.cart],
    }));
  },
  // decrease the amount of a card
  decreaseAmount: idx => {
    const cart = get().cart;
    if(cart[idx].amount > 1) {
      cart[idx].amount--;
    };
    set(state => ({
      cart: [...state.cart],
    }));
  }
}));

export default useStore;