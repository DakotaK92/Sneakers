"use client"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../store/cartSlice"
import type { RootState } from "../store/store"

export default function CartDrawer() {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={drawerRef}
      className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 z-50"
    >
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
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
