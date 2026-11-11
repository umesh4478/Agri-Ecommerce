import {  useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/slices/cartSlice"; // adjust path as needed


import React, { useState } from "react";
import {
  Leaf,
  ShieldCheck,
  Heart,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Star,
} from "lucide-react";


export default function NaturalStorefront() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      title: "100% Organic",
      desc: "Sourced directly from certified earth-friendly family farms.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Zero Toxins",
      desc: "Completely free from parabens, synthetic fragrances, and chemicals.",
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      title: "Small-Batch Crafted",
      desc: "Handmade with love to preserve raw, botanical potency.",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Wildflower Honey & Oats Soap",
      category: "Skincare",
      price: 20,
      rating: 5,

      // CHANGED: actual image URL instead of https://unsplash.com
      image: '/images/plant1.jpg'
    },
    {
      id: 2,
      name: "Revitalizing Herbal Face Serum",
      category: "Facial Care",
      price: 100,
      rating: 5,

      // CHANGED
      image: '/images/serum.jpg',
    },
    {
      id: 3,
      name: "Eucalyptus Calm Bath Salts",
      category: "Body & Bath",
      price:250,
      rating: 4,

      // CHANGED
      image: 'images/soap.jpg',
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-amber-50/60 via-stone-50 to-emerald-50/40">

        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-200/50 blur-3xl"></div>

          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-100/60 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium tracking-wide text-emerald-800 rounded-full bg-emerald-100/60 backdrop-blur-sm border border-emerald-200/50">
            <Sparkles className="w-4 h-4" />
            Freshly Handmade in Small Batches
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-stone-900 tracking-tight leading-[1.1] mb-6">
            Nourish your body with
            <br className="hidden sm:inline" />

            <span className="italic text-emerald-800 font-medium">
              pure, raw nature
            </span>
            .
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-stone-600 mb-10 leading-relaxed">
            Skip the synthetic fillers. Experience toxic-free, artisanal
            skincare and wellness crafted by hand in our country kitchen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button className="w-full sm:w-auto px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg shadow-xl shadow-stone-900/10 transition-all flex items-center justify-center gap-2 group">
              Explore Our Collection

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-50 text-stone-800 font-medium rounded-lg border border-stone-200 transition-colors shadow-sm">
              Our Crafting Story
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-stone-100">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center rounded-4xl p-5  bg-green-200  p-4"
            >

              <div className="w-14 m-2 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-5 border border-emerald-100">
                {feature.icon}
              </div>

              <h3 className="text-xl font-serif text-stone-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-stone-600 leading-relaxed max-w-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="py-24 px-4 bg-stone-50 border-y border-stone-200/60">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">

            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-800 uppercase block mb-2">
                Customer Favorites
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif text-stone-950">
                Shop the Kitchen Counter
              </h2>
            </div>

            <a
              href="#all-products"
              className="text-sm font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 decoration-emerald-800/30 transition-colors"
            >
              View all products ({products.length})
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200/60 hover:shadow-xl transition-all duration-300 flex flex-col"
              >

                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-stone-700 rounded-md border border-stone-200/40">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">

                  <div>

                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < product.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-stone-200"
                            }`}
                        />
                      ))}
                    </div>

                    <h3 className="font-serif text-lg text-stone-900 group-hover:text-emerald-800 transition-colors mb-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-100">

                    <span className="text-xl font-medium text-stone-900">
                      {product.price}
                    </span>

                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="p-2.5 bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white rounded-lg transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="py-24 px-4 max-w-4xl mx-auto text-center">

        <div className="flex justify-center mb-6 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>

        <blockquote className="text-xl sm:text-2xl font-serif italic text-stone-900 leading-relaxed mb-6">
          "The herbal face serum completely transformed my dry patches within
          a week. You can literally smell the freshness of the botanicals the
          minute you open the glass bottle."
        </blockquote>

        <cite className="not-italic text-sm font-semibold tracking-wider text-stone-500 uppercase">
          — Eleanor R., Verified Buyer
        </cite>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="pb-24 px-4 max-w-4xl mx-auto">

        <div className="bg-emerald-900 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 max-w-xl mx-auto">

            <h2 className="text-2xl sm:text-3xl font-serif mb-3">
              Join the Batch List
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base mb-8">
              We restock in highly limited batches every fortnight. Sign up
              to get VIP early access and 10% off your first checkout.
            </p>

            {subscribed ? (

              <div className="p-4 bg-emerald-800/60 rounded-lg border border-emerald-700/50 text-emerald-200 font-medium">
                ✨ Check your inbox! We've sent your 10% discount code.
              </div>

            ) : (

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >

                {/* CHANGED: completed the missing input */}
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-stone-900 placeholder:text-stone-400 outline-none focus:ring-2 focus:ring-emerald-300"
                />

                {/* CHANGED: completed missing button */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-100 hover:bg-amber-200 text-emerald-950 font-semibold rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="pb-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">

          <div className="flex justify-center mb-5">
            <Leaf className="w-8 h-8 text-emerald-700" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-4">
            Simple ingredients. Honest products.
          </h2>

          <p className="text-stone-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Everything we make starts with carefully selected natural
            ingredients and ends with something we are proud to put on our
            own skin.
          </p>

          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-medium rounded-lg transition-colors">
            Discover More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

