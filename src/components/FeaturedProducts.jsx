import React from "react";
import { assets, category, products } from "@/assets/assets";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  return (
    <div>
      <div className="my-5">
        <div className=" py-8 text-3xl">
          <p className=" md:text-lg text-xl text-primary font-bold">
            Featured Products
          </p>
        </div>
        {/**Rendering products */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4 gap-y-6">
          {products.map((item, index) => (
            <ProductItem
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.qty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
