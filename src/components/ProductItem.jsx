import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <div>
      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden">
          <img src={image} className="hover:scale-110 transition-all" alt="" />
        </div>
        <p className="pt-3 pb-1">{name}</p>
        <p className="text-sm font-bold">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
