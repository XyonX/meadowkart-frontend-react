import { assets } from "@/assets/assets";
import React from "react";

const BannerDouble = () => {
  return (
    <div className=" flex flex-col sm:flex-row gap-4 my-10">
      <div>
        <img
          src={assets.icons.banner3}
          className="cursor-pointer hover:scale-105 transition-all rounded-md"
        />
      </div>
      <div>
        <img
          src={assets.icons.banner4}
          className="cursor-pointer hover:scale-105 transition-all rounded-md"
        />
      </div>
    </div>
  );
};

export default BannerDouble;
