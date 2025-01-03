import { assets, category } from "@/assets/assets";
import React from "react";
import CategoryItem2 from "./CategoryItem2";

const CategoryList = () => {
  return (
    <div>
      <div className="my-5">
        <div className=" py-8 text-3xl">
          <p className=" md:text-lg text-xl text-primary font-bold">
            Shop By Category
          </p>
        </div>
        {/**Rendering products */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-10 gap-4 gap-y-6">
          {category.map((item, index) => (
            <CategoryItem2 key={index} image={item.png} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
