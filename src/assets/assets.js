//icons
import logo from "./meadowkart.png";
import wishlist from "./heart.png";
import profile from "./user.png";
import cart from "./shopping-cart.png";
import cart2 from "./shopping-cart-2.png";
import slide1 from "./home_slide_1.webp";
import slide2 from "./home_slide_2.webp";
import slide3 from "./home_slide_3.webp";

import deal from "./deal.png";
import parcel from "./parcel.png";
import saveMoney from "./save-money.png";
import lorry from "./lorry.png";
import support from "./support.png";

import banner3 from "./banner_03.webp";
import banner4 from "./banner_04.webp";

/***Product categry */
import milk from "./milk.jpg";
import honey from "./honey.jpg";
import egg from "./egg.png";
import breakfast from "./breakfast.jpg";
import ghee from "./ghee.png";
import pujaitem from "./pujaitem.png";

import milkPng from "./milk_400.png";
import honeyPng from "./honey_400.png";
import eggPng from "./egg_400.png";
import breakfastPng from "./breakfast_400.png";
import gheePng from "./ghee_400.png";
import pujaitemPng from "./pujaitem_400.png";
/***Products */

import milkProduct from "./a2milk-product.webp";
import eggWhiteProduct from "./white_eggs-product.webp";
import eggBrownProduct from "./eggs-product.webp";
import gheeProduct from "./ghee-product.webp";

export const assets = {
  icons: {
    logo,
    wishlist,
    profile,
    cart,
    cart2,
    slide1,
    slide2,
    slide3,
    deal,
    parcel,
    saveMoney,
    lorry,
    support,
    banner3,
    banner4,
  },
};

// Optionally adjust category structure for clarity:
export const category = [
  { name: "Milk", image: milk, png: milkPng },
  { name: "Honey", image: honey, png: honeyPng },
  { name: "Egg", image: egg, png: eggPng },
  { name: "Breakfast", image: breakfast, png: breakfastPng },
  { name: "Ghee", image: ghee, png: gheePng },
  { name: "Puja Item", image: pujaitem, png: pujaitemPng },
];

export const products = [
  {
    id: "p001",
    name: "Farm fresh Desi Cow A2 Milk",
    image: milkProduct,
    featured: true,
    price: 95,
    qty: "1000 ml",
  },
  {
    id: "p002",
    name: "Desi Gir Cow A2 Vedic Ghee",
    image: gheeProduct,
    featured: true,
    price: 1100,
    qty: "500 ml",
  },
  {
    id: "p003",
    name: "White Egg",
    image: eggWhiteProduct,
    featured: true,
    price: 48,
    qty: "6 Pcs box",
  },
  {
    id: "p004",
    name: "Country hen Egg",
    image: eggBrownProduct,
    featured: true,
    price: 90,
    qty: "6 Pcs box",
  },
];
