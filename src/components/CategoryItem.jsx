import React, { useContext } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ image, name }) => {
  return (
    <Link className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out rounded-2xl  "
          src={image}
        ></img>
        <p className="pt-3 pb-1 text-sm">{name}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
