"use client"

import { useDispatch, useSelector } from "react-redux"
import { toggleCart } from "../store/uiSlice"
import type { RootState } from "../store/store"
import Image from "next/image"

export default function Cart() {
  const dispatch = useDispatch()

  const count = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  return (
    <button
      onClick={() => dispatch(toggleCart())}
      className="relative"
    >
      <Image
        src="/images/icon-cart.svg"
        alt="Cart"
        width={25}
        height={25}
      />

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full px-2">
          {count}
        </span>
      )}
    </button>
  )
}
