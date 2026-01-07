"use client"

import Image from "next/image"
import Cart from "./Cart"
import { useState } from "react"

const navItems = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header() {
    const [active, setActive] = useState("Collections");

    return (
        <header className="border-b border-gray-200 bg-white py-6 mb-10">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4">
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

                <div className="flex items-center gap-6">
                    <Cart />
                    <Image
                        src="/images/image-avatar.png"
                        alt="Profile Picture"
                        width={50}
                        height={50}
                        className="hover:border-2 border-amber-600 rounded-full"
                    />
                </div>
            </div>
        </header>
    )
}
