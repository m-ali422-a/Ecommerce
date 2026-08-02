import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem"

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [mapProducts, setMapProducts] = useState([]);

  useEffect(()=>{
    setMapProducts(products)
  },[])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-gray-300 border-t pt-10">
      {/* Filter Section  */}
      <div className="w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl uppercase flex items-center gap-2 cursor-pointer"
        >
          Filters
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} `}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category Filter  */}
        <div
          className={`border border-gray-300 mt-6 pl-5 py-3 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="uppercase text-sm font-medium mb-3">Categories</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Men"} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Women"} /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Kids"} /> Kids
            </p>
          </div>
        </div>

        {/* Other Category  */}
        <div
          className={`border border-gray-300 mt-5 pl-5 py-3 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="uppercase text-sm font-medium mb-3">Type</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Topwear"} /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Bottomwear"} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Winterwear"} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Section  */}
      <div className="flex-1">
        <div className="text-base sm:text-2xl flex justify-between">
          <Title text1={"All"} text2={"Collections"} />

          {/* Product Sorting  */}
          <select className="border-2 border-gray-300 text-sm p-2">
            <option value="relevant">Sort by:Relevant</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low </option>
          </select>
        </div>
{/* Map Product Data  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-5">
        {
          mapProducts?.map((item,index)=>(
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

      

    </div>
  );
};

export default Collection;
