"use client"

import Image from "next/image"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"

export default function ProductInfo() {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  const handleAddToCart = () => {
    if (quantity === 0) return

    dispatch(
      addToCart({
        id: "fall-limited-sneakers",
        name: "Fall Limited Edition Sneakers",
        price: 125,
        image: "/images/image-product-1.jpg",
        quantity,
      })
    )

    // optional: reset quantity after adding
    setQuantity(0)
  }

  return (
    <div className="space-y-6">
      <p className="text-sm tracking-widest text-gray-500 uppercase font-bold">
        Sneaker Company
      </p>

      <h1 className="text-6xl font-bold">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-gray-600 leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything
        the weather can offer.
      </p>

      {/* Price */}
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">$125.00</span>
        <span className="bg-gray-900 text-white px-2 py-1 rounded-md text-sm font-semibold">
          50%
        </span>
      </div>

      <p className="line-through text-gray-600">$250.00</p>

      {/* Actions */}
      <div className="flex gap-4">
        {/* Quantity */}
        <div className="flex items-center gap-6 bg-gray-200 px-6 py-3 rounded-lg">
          <button
            onClick={() => setQuantity(q => Math.max(0, q - 1))}
            className="text-orange-500 font-bold text-xl"
          >
            −
          </button>

          <span className="font-bold">{quantity}</span>

          <button
            onClick={() => setQuantity(q => q + 1)}
            className="text-orange-500 font-bold text-xl"
          >
            +
          </button>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          <Image
            src="/images/icon-cart.svg"
            alt="Cart Icon"
            width={16}
            height={16}
          />
          Add to cart
        </button>
      </div>
    </div>
  )
}
