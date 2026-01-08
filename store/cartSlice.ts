import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CartItem = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find(i => i.id === action.payload.id)
      if (item) item.quantity += action.payload.quantity
      else state.items.push(action.payload)
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },

    clearCart(state) {
      state.items = []
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item) item.quantity += 1
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
      else if (item && item.quantity === 1)
        state.items = state.items.filter(i => i.id !== action.payload)
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions

export default cartSlice.reducer
