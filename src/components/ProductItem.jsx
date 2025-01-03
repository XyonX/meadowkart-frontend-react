import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, quantity }) => {
  const currency = "₹";

  return (
    <Link
      className="group text-gray-700 cursor-default bg-white border border-gray-200 rounded-md hover:border-gray-400"
      to={`/product/${id}`}
    >
      <div className="flex flex-col h-full p-2">
        {/* Image Section */}
        <div className="p-4 flex-shrink-0">
          <img
            className="group-hover:scale-110 transition ease-in-out w-full h-auto"
            src={image}
            alt={name}
          />
        </div>

        {/* Product Name */}
        <p className="pt-3 pb-1 text-md font-bold flex-grow">{name}</p>

        {/* Footer Section */}
        <div className="mt-auto">
          <p className="pt-3 pb-1 text-sm">{quantity}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">
              {currency}
              {price}
            </p>
            <div className="p-2 w-8 h-8 bg-gray-100 rounded-full flex justify-center items-center cursor-pointer">
              <img src={assets.icons.cart2} className="w-5" alt="Add to cart" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
