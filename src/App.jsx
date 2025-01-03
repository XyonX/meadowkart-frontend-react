import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-52">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={Profile} />
        </Routes>
      </div>

      {/* Footer */}

      <div className="bg-gray-100">
        <Footer />
      </div>
    </div>
  );
};

export default App;
