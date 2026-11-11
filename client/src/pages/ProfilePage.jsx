import React, { useState, useEffect } from "react";
import { User, Mail, Phone, MapPin, Edit3 } from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    address: {
      street: "123 Green Valley Road, Organic Lane",
      city: "Bengaluru",
      state: "Karnataka",
      zipCode: "560001",
      country: "India",
    },
  });

  const [loading, setLoading] = useState(false);

  // Optional: Fetch user data from your backend API if logged in
  useEffect(() => {
    // Example:
    // fetch('http://localhost:5000/api/user/profile', { headers: { Authorization: `Bearer ${token}` } })
    //   .then(res => res.json())
    //   .then(data => setUser(data))
    //   .catch(err => console.error(err));
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-stone-600">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-[#FBFBFA] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden">
        
        {/* Header Banner */}
        <div className="bg-emerald-800 px-6 py-8 text-white flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-3xl font-serif font-bold border-4 border-white/20 shadow-inner">
            {user.name.charAt(0)}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-serif font-medium">{user.name}</h1>
            <p className="text-emerald-100 text-sm mt-1">Valued Community Member</p>
          </div>
        </div>

        {/* Profile Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Personal Information Section */}
          <div>
            <h2 className="text-lg font-serif font-medium text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-2">
              <User className="w-5 h-5 text-emerald-700" />
              Personal Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-stone-700">
              <div className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <Mail className="w-5 h-5 text-stone-400 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-400 uppercase font-semibold">Email Address</span>
                  <span className="text-sm font-medium text-stone-800">{user.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-100">
                <Phone className="w-5 h-5 text-stone-400 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-400 uppercase font-semibold">Phone Number</span>
                  <span className="text-sm font-medium text-stone-800">{user.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h2 className="text-lg font-serif font-medium text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-100 pb-2">
              <MapPin className="w-5 h-5 text-emerald-700" />
              Shipping & Delivery Address
            </h2>
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-100 text-stone-700 space-y-2">
              <p className="font-medium text-stone-900">{user.address.street}</p>
              <p className="text-sm">
                {user.address.city}, {user.address.state} - {user.address.zipCode}
              </p>
              <p className="text-sm text-stone-500">{user.address.country}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4 border-t border-stone-100">
            <button 
              onClick={() => alert("Edit profile functionality coming soon!")}
              className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}