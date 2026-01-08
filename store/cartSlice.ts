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
    addToCart: (state, action) => {
    const item = action.payload
    const existingItem = state.items.find(i => i.id === item.id)

    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      state.items.push(item)
    }
  },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    clearCart(state) {
      state.items = []
    },

    // NEW: Increase quantity
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },

    // NEW: Decrease quantity
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      } else if (item && item.quantity === 1) {
        // Optional: remove item if quantity hits 0
        state.items = state.items.filter(i => i.id !== action.payload)
      }
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
