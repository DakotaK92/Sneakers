"use client"

import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { removeFromCart } from "../store/cartSlice"
import Image from "next/image"

export default function CartDropdown() {
  const dispatch = useDispatch()

  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <div className="absolute right-0 top-12 w-96 bg-white rounded-xl shadow-xl z-50">
      {/* Header */}
      <div className="border-b px-6 py-4 font-bold">
        Cart
      </div>

      {/* Body */}
      <div className="p-6">
        {items.length === 0 ? (
          <p className="text-center text-gray-400 py-10">
            Your cart is empty
          </p>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 mb-6"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded"
                />

                <div className="flex-1 text-sm text-gray-600">
                  <p>{item.name}</p>
                  <p>
                    ${item.price.toFixed(2)} x {item.quantity}{" "}
                    <span className="font-bold text-black">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Image
                    src="/images/icon-delete.svg"
                    alt="Delete"
                    width={14}
                    height={14}
                  />
                </button>
              </div>
            ))}

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}
