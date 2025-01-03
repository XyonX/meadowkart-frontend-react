import React from "react";

const CategoryItem2 = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      {/* Circular background with the image */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100 hover:bg-gray-200 group p-2">
        <img
          src={image}
          className="w-full h-full object-cover group-hover:scale-110 transition ease-in-out"
        />
      </div>
      {/* Text below the circular background */}
      <div className="mt-2">
        <h2 className="text-green-700 font-bold text-center">{name}</h2>
      </div>
    </div>
  );
};

export default CategoryItem2;
