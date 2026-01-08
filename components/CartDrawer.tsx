"use client"

import { useDispatch, useSelector } from "react-redux"
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice"
import type { RootState } from "../store/store"

export default function CartDrawer() {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootState) => state.cart)

  if (!isOpen) return null

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 z-50">
      <h2 className="text-lg font-bold mb-4">Your Cart</h2>

      {items.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">
              ${item.price} × {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="px-2 py-1 border rounded"
            >
              −
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="px-2 py-1 border rounded"
            >
              +
            </button>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="ml-2 text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
