import React from "react";
import { assets } from "../assets/assets";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="px-10">
      <div className="flex items-center justify-between py-5 font-medium">
        {/* Left section with logo and location */}
        <div className="flex items-center gap-5 text-sm">
          <img src={assets.icons.logo} alt="Logo" className="w-16" />
          <div class="hidden lg:block">
            <p className="font-bold text-primary">Delivery In</p>
            <p className="text-gray-700">Kolkata</p>
          </div>
        </div>
        <form class="hidden md:flex max-w-lg mx-auto">
          <div class="flex">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-800 sr-only"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-s-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300"
              type="button"
            >
              All categories
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-200 rounded-lg shadow w-44"
            >
              <ul
                class="py-2 text-sm text-gray-700"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-80 z-20 text-sm text-gray-800 bg-gray-100 rounded-e-lg border border-gray-300 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-500"
                placeholder="Search Products"
                required
              />
              <button
                type="submit"
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-e-lg border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center justify-between gap-5">
          <div className=" group flex gap-2 items-center justify-center cursor-pointer">
            <img
              src={assets.icons.wishlist}
              className="w-6 cursor-pointer font-bold"
            />
            <p className="text-gray-700 group-hover:text-green-800 hidden sm:inline-block">
              Wishlist
            </p>
          </div>
          <div className=" group flex gap-2 items-center justify-center cursor-pointer">
            <img src={assets.icons.cart} className="w-6 cursor-pointer" />
            <p className="text-gray-700 group-hover:text-green-800 hidden sm:inline-block">
              Cart
            </p>
          </div>
          <div className="group flex gap-2 items-center justify-center cursor-pointer">
            <img src={assets.icons.profile} className="w-6 " />
            <p className="text-gray-700 group-hover:text-green-800 hidden sm:inline-block">
              Profile
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
