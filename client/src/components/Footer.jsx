import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#263b29] text-white mt-20">

      {/* Newsletter Section */}
      <div className="border-b border-[#526451]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold">
              Stay close to nature <i class="fa-solid fa-leaf"></i>
            </h2>

            <p className="text-[#c8d0c5] mt-2">
              Get updates about new natural products and special offers.
            </p>
          </div>

          <div className="flex w-full md:w-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-l-full outline-none text-gray-800 w-full md:w-72"
            />

            <button className="bg-[#d88c45] px-6 py-3 rounded-r-full font-semibold hover:bg-[#c47835] transition">
              Subscribe
            </button>

          </div>

        </div>
      </div>


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl"><i class="fa-solid fa-leaf"></i></span>

            <h2 className="text-2xl font-bold">
              NatureNest
            </h2>
          </div>

          <p className="text-[#c8d0c5] leading-7">
            Bringing the goodness of nature closer to you.
            Discover carefully selected natural products
            for a healthier and simpler lifestyle.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">

            <button className="w-10 h-10 rounded-full bg-[#3b513e] hover:bg-[#d88c45] transition">
              <i class="fa-solid fa-camera"></i>
            </button>

            <button className="w-10 h-10 rounded-full bg-[#3b513e] hover:bg-[#d88c45] transition">
              <i class="fa-solid fa-book-open"></i>
            </button>

            <button className="w-10 h-10 rounded-full bg-[#3b513e] hover:bg-[#d88c45] transition">
              🐦
            </button>

          </div>

        </div>


        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Shop
          </h3>

          <div className="space-y-3 text-[#c8d0c5]">

            <Link
              to="/products"
              className="block hover:text-white transition"
            >
              All Products
            </Link>

            <Link
              to="/products"
              className="block hover:text-white transition"
            >
              Natural Skincare
            </Link>

            <Link
              to="/products"
              className="block hover:text-white transition"
            >
              Organic Foods
            </Link>

            <Link
              to="/products"
              className="block hover:text-white transition"
            >
              Herbal Products
            </Link>

            <Link
              to="/products"
              className="block hover:text-white transition"
            >
              Best Sellers
            </Link>

          </div>
        </div>


        {/* Information */}
        <div>

          <h3 className="text-lg font-semibold mb-5">
            Information
          </h3>

          <div className="space-y-3 text-[#c8d0c5]">

            <Link to="/about" className="block hover:text-white transition">
              About Us
            </Link>

            <Link to="/contact" className="block hover:text-white transition">
              Contact Us
            </Link>

            <Link to="/shipping" className="block hover:text-white transition">
              Shipping & Delivery
            </Link>

            <Link to="/returns" className="block hover:text-white transition">
              Returns
            </Link>

            <Link to="/privacy" className="block hover:text-white transition">
              Privacy Policy
            </Link>

          </div>

        </div>


        {/* Contact */}
        <div>

          <h3 className="text-lg font-semibold mb-5">
            Get in touch
          </h3>

          <div className="space-y-4 text-[#c8d0c5]">

            <p>
              📍 From nature, with love
            </p>

            <p>
              📧 hello@naturenest.com
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              🕒 Mon - Sat : 9 AM - 6 PM
            </p>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-[#526451]">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#aeb8aa]">

          <p>
            © 2026 NatureNest. All rights reserved.
          </p>

          <p>
            Made with 🌿 for nature lovers
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;