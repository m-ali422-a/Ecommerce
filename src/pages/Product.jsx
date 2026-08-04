import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Button from "../components/Button";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchData = () => {
    products?.map((item) => {
      if (item._id === productId) {
        setProductsData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  return productData ? (
    <div className="border-t border-gray-200 pt-10">
      {/* Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Products Images  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[118px] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
                src={item}
                key={index}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-80%">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Information  */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(27)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}
            {productData.price}
          </p>
          <p className="mt-3 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
            {/* Size Section  */}
          <div className="flex flex-col gap-4 my-10">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`bg-gray-100 py-2 px-4 border border-gray-200 cursor-pointer mb-4 ${item === size ? "border-orange-400" : ""} `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Add to Cart Button  */}
            <Button text={"Add to Cart"} style={"!text-sm"} />
            <div className="border-b w-4/5 mt-8 border-gray-300"></div>
            
            <div className="text-sm text-gray-500 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-5 h-[1px] bg-[#414141]"></p>
                <p>100% Original product.</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-5 h-[1px] bg-[#414141]"></p>
                <p>Cash on delivery is available on this product.</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-8 md:w-5 h-[1px] bg-[#414141]"></p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
