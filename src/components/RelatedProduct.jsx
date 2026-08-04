import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "../components/ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let copyProducts = products.slice();
      copyProducts = copyProducts.filter((item) => category === item.category);
      copyProducts = copyProducts.filter(
        (item) => subCategory === item.subCategory,
      );
      setRelated(copyProducts.slice(0,5));
    }
  }, [products]);

  return(
     <div>
        <div className="text-center text-3xl py-2 my-2 mt-25">
            <Title text1={'Related'} text2={'Products'} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
                related?.map((item,index)=>(
                    <ProductItem 
                     key={index}
                     id={item._id}
                     name={item.name}
                     price={item.price}
                     image={item.image[0]}
                    />
                ))
            }
        </div>
     </div>
  )
};

export default RelatedProduct;
