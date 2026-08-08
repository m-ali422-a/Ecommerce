import Title from "../components/Title";
import CartTotal from '../components/CartTotal'
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import Button from '../components/Button'
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const [payment, setPayment] = useState("cod");
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-300 pt-14">
      {/* Left Content  */}
      <div className='flex flex-col w-full sm:max-w-[485px] gap-4'>
        <div className='text-xl'>
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="First Name" />
          <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="Last Name" />
        </div>
        <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="Enter your Email" />
        <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="Street" />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="City" />
          <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="State" />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded px-3 py-2 w-full' type="number" placeholder="Zip Code" />
          <input className='border border-gray-300 rounded px-3 py-2 w-full' type="text" placeholder="Country" />
        </div>
        <input className='border border-gray-300 rounded px-3 py-2 w-full' type="number" placeholder="Phone" />
      </div>
      {/* Right Content  */}
      <div className='mt-10'>
        <div className='min-w-110'>
        <CartTotal/>
      </div>
      <div className='text-lg mt-12'>
        <Title text1={"Payment"} text2={"Method"} />

        {/* Payment Methods  */}
      <div className='flex flex-col sm:flex-row justify-between gap-3'>

        <div onClick={()=>setPayment('cod')} className='flex items-center gap-3 border border-gray-400 px-2 py-2 w-full  sm:w-[220px] cursor-pointer'>
          <p className={`w-4 h-4 rounded-full border border-gray-400 ${payment === 'cod' ? 'bg-green-400' : '' }`}></p>
          <p className='text-gray-500 text-sm font-medium uppercase'>Cash on Delivery</p>
        </div>
        <div onClick={()=>setPayment('bank')} className='flex items-center gap-3 border border-gray-400 px-2 py-2 w-full  sm:w-[220px] cursor-pointer'>
          <p className={`w-4 h-4 rounded-full border border-gray-400 ${payment === 'bank' ? 'bg-green-400' : '' }`}></p>
          <p className='text-gray-500 text-sm font-medium uppercase'>Bank Transfer</p>
        </div>
        </div>
        <div className='text-end mt-6'>
        <Button onClick={()=>navigate('/orders')} text={"Place Order"} style={'!text-sm px-15'} />
        </div>
      </div>


      </div>
      
    </div>
  );
};

export default PlaceOrder;
