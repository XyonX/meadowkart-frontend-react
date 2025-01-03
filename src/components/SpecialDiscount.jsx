import React from "react";

const SpecialDiscount = ({ image, t1, t2 }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full">
        <img src={image} className="w-10 h-10 object-contain" />
      </div>
      {/* Text */}
      <div className="text-center">
        <h2 className="text-lg font-bold text-emerald-700">{t1}</h2>
        <p className="text-sm text-gray-600 mt-1">{t2}</p>
      </div>
    </div>
  );
};

export default SpecialDiscount;
