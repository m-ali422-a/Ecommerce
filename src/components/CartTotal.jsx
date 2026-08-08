import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";

const CartTotal = () => {

  const {currency,delivery_fee,getCartTotal} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"Cart"} text2={"Total"} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between border-b border-gray-300 pb-2'>
                <p>Subtotal</p>
                <p>{currency}{getCartTotal()}.00</p>
            </div>
            <div className='flex justify-between border-b border-gray-300 pb-2'>
                <p>Shipping Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <div className='flex justify-between font-bold'>
                <p>Total</p>
                <p>{currency}{getCartTotal() === 0 ? 0 : getCartTotal() + delivery_fee}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal