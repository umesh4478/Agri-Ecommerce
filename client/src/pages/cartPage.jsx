import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from "./redux/slices/cartSlice.js";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount (parsing raw numerical value from string prices like "₹40")
  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = Number(String(item.price).replace(/[^0-9.-]+/g, ""));
    return acc + numericPrice * item.quantity;
  }, 0);

  const shipping = subtotal > 0 ? 50 : 0; // Flat shipping rate
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FBFBFA] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 text-emerald-800">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Your cart is empty</h2>
        <p className="text-stone-600 mb-8 max-w-sm">
          Looks like you haven't added any natural goodies to your kitchen counter yet.
        </p>
        <Link
          to="/"
          className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] py-12 px-4 sm:px-6 lg:px-8 font-sans text-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
          <h1 className="text-3xl font-serif text-stone-900">Your Shopping Cart</h1>
          <Link to="/" className="text-sm font-semibold text-emerald-800 hover:underline flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl border border-stone-200 shadow-sm gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-stone-100" />
                  <div>
                    <h3 className="font-serif text-lg text-stone-900">{item.name}</h3>
                    <p className="text-sm text-stone-500">{item.category}</p>
                    <span className="font-medium text-stone-900 mt-1 block">{item.price}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  {/* Quantity modifier */}
                  <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="p-2 hover:bg-stone-100 text-stone-600 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 font-medium text-stone-800">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="p-2 hover:bg-stone-100 text-stone-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="text-sm text-rose-600 hover:underline font-medium"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-serif text-stone-900 mb-6 pb-4 border-b border-stone-100">
                Order Summary
              </h3>

              <div className="space-y-4 text-sm text-stone-600 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">&#8377;{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-medium text-stone-900">&#8377;{shipping}</span>
                </div>
                <div className="border-t border-stone-100 pt-4 flex justify-between text-base font-semibold text-stone-900">
                  <span>Total</span>
                  <span>&#8377;{total}</span>
                </div>
              </div>

              <button
                onClick={() => alert("Proceeding to secure checkout...")}
                className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-xl transition-colors shadow-lg shadow-emerald-800/10"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}