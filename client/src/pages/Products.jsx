import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/slices/cartSlice"; // Adjust path if needed
import {
  ShoppingBag,
  Check,
  Star,
  Search,
  Filter,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

export default function Products() {
  const dispatch = useDispatch();

  // Search, Category, Sorting, and Button Feedback State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [addedIds, setAddedIds] = useState({});

  // Expanded Realistic Product Catalog with Unique Images
  const allProducts = [
    {
      id: 1,
      name: "Wildflower Honey & Oats Soap",
      category: "Body & Bath",
      price: 240,
      rating: 5,
      reviews: 128,
      size: "120g Bar",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=800&q=80",
      description:
        "Cold-processed artisan soap bar crafted with rolled organic oats and raw wildflower honey for gentle exfoliation.",
    },
    {
      id: 2,
      name: "Revitalizing Bakuchiol & Rosehip Serum",
      category: "Facial Care",
      price: 650,
      rating: 5,
      reviews: 94,
      size: "30ml Dropper",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      description:
        "Concentrated botanical elixir packed with cold-pressed rosehip oil and natural bakuchiol to restore skin radiance.",
    },
    {
      id: 3,
      name: "Eucalyptus & Himalayan Pink Bath Salts",
      category: "Body & Bath",
      price: 380,
      rating: 4,
      reviews: 62,
      size: "250g Glass Jar",
      badge: null,
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&w=800&q=80",
      description:
        "Mineral-rich sea and pink rock salt soak infused with steam-distilled nilgiri eucalyptus essential oil.",
    },
    {
      id: 4,
      name: "Organic Neem & Aloe Scalp Cleanser",
      category: "Hair Care",
      price: 420,
      rating: 5,
      reviews: 145,
      size: "200ml Bottle",
      badge: "100% Organic",
      image:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      description:
        "Sulfate-free herbal shampoo enriched with fresh farm aloe vera pulp, neem leaf extract, and reetha.",
    },
    {
      id: 5,
      name: "Cold-Pressed Sweet Almond & Jojoba Oil",
      category: "Skincare",
      price: 520,
      rating: 5,
      reviews: 83,
      size: "100ml Amber Bottle",
      badge: "Pure Cold-Pressed",
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
      description:
        "Unrefined, single-origin sweet almond oil blended with golden jojoba for deep body and facial nourishment.",
    },
    {
      id: 6,
      name: "Kannauj Rosewater Hydrating Mist",
      category: "Facial Care",
      price: 310,
      rating: 4,
      reviews: 112,
      size: "100ml Mist Spray",
      badge: null,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      description:
        "Copper-distilled pure Damask rose hydrosol that balances skin pH, tightens pores, and refreshes instantly.",
    },
    {
      id: 7,
      name: "French Green Clay & Matcha Detox Mask",
      category: "Facial Care",
      price: 490,
      rating: 5,
      reviews: 76,
      size: "60g Glass Jar",
      badge: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
      description:
        "Purifying mineral clay mask blended with ceremonial-grade green tea and bentonite to draw out impurities.",
    },
    {
      id: 8,
      name: "Raw Shea & Kokum Whipped Body Butter",
      category: "Skincare",
      price: 580,
      rating: 5,
      reviews: 109,
      size: "150g Tub",
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=800&q=80",
      description:
        "Rich, cloud-like moisturizer made with unrefined African shea butter, Indian kokum, and cold-pressed vitamin E.",
    },
    {
      id: 9,
      name: "Bhringraj & Rosemary Root Vitality Oil",
      category: "Hair Care",
      price: 460,
      rating: 4,
      reviews: 58,
      size: "100ml Applicator",
      badge: null,
      image:
        "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      description:
        "Slow-infused Ayurvedic herb oil with rosemary and sesame to strengthen hair follicles and reduce breakage.",
    },
    {
      id: 10,
      name: "Kumkumadi Saffron Illuminating Cream",
      category: "Facial Care",
      price: 790,
      rating: 5,
      reviews: 164,
      size: "50g Glass Jar",
      badge: "Luxury Edit",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      description:
        "Overnight restorative cream infused with Pampore saffron strands, sandalwood, and lotus extracts.",
    },
    {
      id: 11,
      name: "Chamomile & Vetiver Calming Body Wash",
      category: "Body & Bath",
      price: 390,
      rating: 4,
      reviews: 47,
      size: "250ml Pump",
      badge: null,
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
      description:
        "Gentle coconut-derived body cleanser scented with earthy vetiver roots and soothing wild chamomile blossoms.",
    },
    {
      id: 12,
      name: "Calendula & Ceramide Barrier Balm",
      category: "Skincare",
      price: 450,
      rating: 5,
      reviews: 71,
      size: "75ml Tube",
      badge: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80",
      description:
        "Ultra-soothing daily moisture balm formulated with whole calendula petals and plant ceramides for dry skin.",
    },
  ];

  const categories = [
    "All",
    "Skincare",
    "Facial Care",
    "Body & Bath",
    "Hair Care",
  ];

  // Handle Add to Cart with Redux dispatch + temporary visual confirmation
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  // Filter Products based on Search Query and Category
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "low-to-high") return a.price - b.price;
      if (sortBy === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-stone-800 font-sans py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-emerald-800 uppercase mb-3 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            Pure & Organic Selection
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 mb-4">
            Our Complete Collection
          </h1>
          <p className="text-stone-600 max-w-xl mx-auto text-base">
            Small-batch apothecary formulations handcrafted with raw botanical
            ingredients sourced directly from local family farms.
          </p>
        </div>

        {/* ================= FILTERS & SEARCH BAR ================= */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by product or ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm outline-none focus:ring-2 focus:ring-emerald-800/20 focus:border-emerald-800 transition-all"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-800/10"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-stone-100">
            <SlidersHorizontal className="w-4 h-4 text-stone-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-emerald-800/20 cursor-pointer"
            >
              <option value="default">Sort by: Featured</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <span>
            Showing <strong className="text-stone-800">{filteredProducts.length}</strong> of{" "}
            {allProducts.length} botanical formulations
          </span>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSortBy("default");
              }}
              className="text-emerald-800 hover:underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* ================= PRODUCT GRID ================= */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <Filter className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-stone-800 mb-1">
              No products found
            </h3>
            <p className="text-stone-500 text-sm">
              Try searching for something else or change your category filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedIds[product.id];
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200/70 hover:shadow-xl hover:border-stone-300/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Pill */}
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-stone-700 rounded-md border border-stone-200/40">
                        {product.category}
                      </span>

                      {/* Optional Highlight Badge */}
                      {product.badge && (
                        <span className="absolute top-3 right-3 bg-emerald-900/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-50 rounded-md">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < product.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-stone-200"
                              }`}
                            />
                          ))}
                          <span className="text-xs text-stone-400 ml-1">
                            ({product.reviews})
                          </span>
                        </div>
                        <span className="text-xs font-medium text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                          {product.size}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg text-stone-900 group-hover:text-emerald-800 transition-colors mb-1.5">
                        {product.name}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="px-6 pb-6 pt-4 flex items-center justify-between border-t border-stone-100 mt-2">
                    <div>
                      <span className="text-xs text-stone-400 block">Price</span>
                      <span className="text-xl font-semibold text-stone-900">
                        ₹{product.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                        isAdded
                          ? "bg-emerald-800 text-white"
                          : "bg-emerald-50 hover:bg-emerald-800 text-emerald-800 hover:text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          Add to Bag
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}