import Image from "next/image"

const Cart = () => {
  return (
    <div>
      <Image
          src="/images/icon-cart.svg"
          alt="Profile Picture"
          width={25}
          height={25}
          className="cursor-pointer"
      />
    </div>
  )
}

export default Cart
