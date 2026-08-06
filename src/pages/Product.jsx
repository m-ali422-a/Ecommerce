import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Button from "../components/Button";
import RelatedProduct from "../components/RelatedProduct";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId]);

  return productData ? (
    <div className="border-t border-gray-200 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <ToastContainer/>
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
            <Button
              onClick={() => addToCart(productData._id, size)}
              text={"Add to Cart"}
              style={"!text-sm"}
            />
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
      {/* Description And review section  */}
      <div className="mt-15">
        <div className="flex">
          <p className="text-sm font-semibold border px-5 py-3 border-gray-300">
            Description
          </p>
          <p className="text-sm border px-5 py-3 border-gray-300">
            Reviews(10)
          </p>
        </div>
        <div className="flex flex-col gap-2 border text-sm p-6 text-gray-500 border-gray-300">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* Related Products  */}

      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
