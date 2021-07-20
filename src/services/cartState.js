import create from "zustand";

const useStore = create(set => ({
  cart: [],
  pushToArray: card => set(state => ({ cart: [...state.cart, card] })),
  clearArray: () => set({ cart: [] })
}));

export default useStore;