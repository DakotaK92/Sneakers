"use client"

import Image from "next/image"

type LightboxProps = {
  images: string[]
  activeIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const Lightbox = ({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-orange-500 text-3xl font-bold cursor-pointer"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer"
      >
        <Image
          src="/images/icon-previous.svg"
          alt="Previous Icon"
          width={8}
          height={8}
        />
      </button>

      {/* Image */}
      <div className="max-w-xl rounded-xl overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt="Sneaker large view"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer"
      >
        <Image
          src="/images/icon-next.svg"
          alt="Next Icon"
          width={8}
          height={8}
        />
      </button>
    </div>
  )
}

export default Lightbox
