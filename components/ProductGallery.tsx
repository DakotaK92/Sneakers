"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Lightbox from "./LightBox"

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
]

const thumbnails = [
  "/images/image-product-1-thumbnail.jpg",
  "/images/image-product-2-thumbnail.jpg",
  "/images/image-product-3-thumbnail.jpg",
  "/images/image-product-4-thumbnail.jpg",
]

const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
  }, [isOpen])

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-xl overflow-hidden bg-orange-100"
        >
          <Image
            src={images[activeIndex]}
            alt="Sneaker"
            className="w-full object-cover"
            width={400}
            height={400}
          />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-4 justify-center">
          {thumbnails.map((thumb, index) => (
            <button
              key={thumb}
              onClick={() => {
                setActiveIndex(index)
                setIsOpen(true)
              }}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2
                ${
                  index === activeIndex
                    ? "border-orange-500"
                    : "border-transparent"
                }
                hover:opacity-75 transition
              `}
            >
              <Image
                src={thumb}
                alt=""
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setIsOpen(false)}
          onNext={() =>
            setActiveIndex((activeIndex + 1) % images.length)
          }
          onPrev={() =>
            setActiveIndex(
              (activeIndex - 1 + images.length) % images.length
            )
          }
        />
      )}
    </>
  )
}

export default ProductGallery
