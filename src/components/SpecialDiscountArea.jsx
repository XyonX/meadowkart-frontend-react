import React from "react";
import SpecialDiscount from "./SpecialDiscount";
import { assets } from "@/assets/assets";
const SpecialDiscountArea = () => {
  return (
    <div className="mt-10">
      <div className=" py-5 px-2 grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 gap-y-6 bg-[#f3f9f5] rounded-lg p-2">
        <SpecialDiscount
          image={assets.icons.lorry}
          t1={"Free Shipping"}
          t2={"Order ₹500 or more"}
        />
        <SpecialDiscount
          image={assets.icons.saveMoney}
          t1={"Save Money"}
          t2={"At lowest prce"}
        />
        <SpecialDiscount
          image={assets.icons.parcel}
          t1={"100% Return Policy"}
          t2={"Any Time Return"}
        />
        <SpecialDiscount
          image={assets.icons.deal}
          t1={"Best Deal Offer"}
          t2={"Grab Your Gear and Go"}
        />
      </div>
    </div>
  );
};

export default SpecialDiscountArea;
