import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-[#f8f6ed] border-b border-[#e4e0d2]">
      {/* Top Offer Bar */}
      <div className="bg-[#304b32] text-white text-center py-2 text-sm">
        <i class="fa-solid fa-leaf"></i> Natural products • Fresh from nature • Made with care
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="text-3xl">
            <img src="/images/newicon.png" alt="" width="85px" className="rounded-3xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#304b32] tracking-wide">
              NatureNest
            </h1>
            <p className="text-xs text-[#7b806f]">
              Pure • Natural • Simple
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-[#3f493d] font-medium">
          <Link to="/home" className="hover:text-[#6b8e58] transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-[#6b8e58] transition">
            Shop
          </Link>
          <Link to="/products" className="hover:text-[#6b8e58] transition">
            Natural Care
          </Link>
          <Link to="/products" className="hover:text-[#6b8e58] transition">
            Best Sellers
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button className="text-xl hover:scale-110 transition">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* Cart Icon with Dynamic Count Badge */}
          <Link to="/cart" className="relative text-xl hover:scale-110 transition p-2 inline-block">
            🛒
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItemsCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden sm:block bg-[#304b32] text-white px-5 py-2.5 rounded-full hover:bg-[#243a27] transition"
          >
            Login
          </Link>
        </div>
        <Link to="/profile">
        <div className="items-center justify-center flex flex-col">
          <i className="fa-solid text-xl fa-user cursor-pointer "></i>
          <p>Profile</p>
        </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;