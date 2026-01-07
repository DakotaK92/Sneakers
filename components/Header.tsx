"use client"

import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../lib/store"
import Cart from "./Cart"

const navItems = ["Collections", "Men", "Women", "About", "Contact"]

export default function Header() {
  const [active, setActive] = useState("Collections")
  const [isCartOpen, setIsCartOpen] = useState(false)

  // 🔢 total items in cart
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    )
  )

  return (
    <header className="border-b border-gray-200 bg-white py-6 mb-10 relative">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
        
        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-black">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={50}
          />

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-4 py-2 border-b-2 transition-colors cursor-pointer font-medium
                ${
                  active === item
                    ? "border-amber-600 text-black"
                    : "border-transparent hover:border-amber-600 text-gray-500"
                }
              `}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="relative flex items-center gap-6">
          
          {/* Cart button */}
          <button
            onClick={() => setIsCartOpen((prev) => !prev)}
            className="relative"
          >
            <Image
              src="/images/icon-cart.svg"
              alt="Cart"
              width={22}
              height={22}
            />

            {/* Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Cart dropdown */}
          {isCartOpen && <Cart />}

          {/* Avatar */}
          <Image
            src="/images/image-avatar.png"
            alt="Profile Picture"
            width={50}
            height={50}
            className="rounded-full hover:border-2 hover:border-amber-600 cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}
