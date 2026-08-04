import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  
  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  }, []);

  return (
    <div className="my-2 sm:my-10">
      <div className="text-center text-3xl py-5 sm:py-8">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="text-xs sm:text-sm md:text-lg text-gray-600">
          Explore the newest arrivals crafted with modern designs and timeless
          fashion for men, women and kids.
        </p>
      </div>

      {/* Latest Collection Products Rendering  */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:p-0">
        {latestProducts?.map((item,index)=>(
          <ProductItem 
          key={index}
          id={item._id}
          image={item.image[0]}
          name={item.name}
          price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;