import type { RootState } from "./store"

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
