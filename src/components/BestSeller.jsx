import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(()=>{
      const bestProducts = products.filter((e)=>e.bestseller);
      setBestSeller(bestProducts.slice(0,5));
  },[])

  return (
    <div className="my-2 sm:my-10">
      <div className="text-center text-3xl pt-5 sm:p-10">
        <Title text1={"Best"} text2={"Seller"} />
      <p className="text-xs sm:text-sm md:text-lg text-gray-600">
        Explore the best sellers crafted with modern designs and timeless
        fashion for men, women and kids.
      </p>
      </div>

      <div className="grid grid-cols-2 sm:gird-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 pt-10 p-3 sm:p-0">
        {
            bestSeller?.map((item,index)=>(
                <ProductItem
                key={index}
                id={item._id}
                image={item.image[0]}
                name={item.name}
                price={item.price}
                />
            ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
