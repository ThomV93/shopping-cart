import create from "zustand";

// shared state hook
const useStore = create(set => ({
  cart: [],
  pushToArray: card => set(state => ({ cart: [ ...state.cart, card ] })),
  clearArray: () => set({ cart: [] })
}));

export default useStore;