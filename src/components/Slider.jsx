import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { assets } from "@/assets/assets";

const Slider = () => {
  return (
    <div className="mt-10 p-2 md:p-0 cursor-pointer">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img
              className="w-full h-400 rounded-2xl"
              src={assets.icons.slide2}
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full h-200 md:h-400 rounded-2xl"
              src={assets.icons.slide1}
            />
          </CarouselItem>

          <CarouselItem>
            <img
              className="w-full h-400 rounded-2xl"
              src={assets.icons.slide3}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
