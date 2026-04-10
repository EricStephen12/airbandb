"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = ["Popular", "Island", "Mainland", "Business", "Coastal"];

const INSPIRATION_DATA: Record<string, { city: string; type: string }[]> = {
  "Popular": [
    { city: "Victoria Island", type: "Corporate stays" },
    { city: "Lekki Phase 1", type: "Luxury apartments" },
    { city: "Ikoyi", type: "Executive flats" },
    { city: "Banana Island", type: "Villa rentals" },
    { city: "Eko Atlantic", type: "Waterfront stays" },
    { city: "Ikeja GRA", type: "Short-term rentals" },
    { city: "Lekki Phase 2", type: "Serviced apartments" },
    { city: "Ajah", type: "Affordable stays" },
    { city: "Maryland", type: "Business housing" },
    { city: "Oniru", type: "Beach-side stays" },
    { city: "Magodo", type: "Suburban stays" },
    { city: "Yaba", type: "Tech hub housing" },
  ],
  "Island": [
    { city: "Victoria Island", type: "Business district" },
    { city: "Ikoyi", type: "Premium apartments" },
    { city: "Banana Island", type: "Exclusive villas" },
    { city: "Eko Atlantic", type: "New city living" },
    { city: "Oniru Estate", type: "Gated community" },
    { city: "Lekki Phase 1", type: "Modern flats" },
    { city: "Admiralty Way", type: "Commercial stays" },
    { city: "Ozumba Mbadiwe", type: "Waterfront living" },
    { city: "Bourdillon", type: "Executive homes" },
    { city: "Maitama Close", type: "Private residences" },
    { city: "Falomo", type: "Central Ikoyi" },
    { city: "Civic Centre Area", type: "Events district" },
  ],
  "Mainland": [
    { city: "Ikeja GRA", type: "Government area" },
    { city: "Maryland", type: "Residential stays" },
    { city: "Magodo", type: "Family housing" },
    { city: "Gbagada", type: "Budget-friendly" },
    { city: "Surulere", type: "Central mainland" },
    { city: "Yaba", type: "Tech community" },
    { city: "Omole Phase 1", type: "Quiet estates" },
    { city: "Ogudu GRA", type: "Suburban living" },
    { city: "Anthony Village", type: "Convenient stays" },
    { city: "Ogba", type: "Affordable rentals" },
    { city: "Alausa", type: "Near government" },
    { city: "Berger", type: "Transit hub" },
  ],
  "Business": [
    { city: "Victoria Island", type: "Financial district" },
    { city: "Ikoyi", type: "Corporate housing" },
    { city: "Eko Atlantic", type: "Tech offices nearby" },
    { city: "Ikeja CBD", type: "Airport proximity" },
    { city: "Lekki Free Zone", type: "Industrial area" },
    { city: "Marina", type: "Banking district" },
    { city: "Broad Street", type: "Commercial center" },
    { city: "Ozumba Mbadiwe", type: "Business stays" },
    { city: "Allen Avenue", type: "Mixed-use area" },
    { city: "Opebi", type: "Office district" },
    { city: "Apapa", type: "Port district" },
    { city: "Ilupeju", type: "Industrial stays" },
  ],
  "Coastal": [
    { city: "Oniru Beach", type: "Beachfront stays" },
    { city: "Lekki Beach", type: "Oceanside living" },
    { city: "Eko Atlantic Beach", type: "Premium waterfront" },
    { city: "Eleko Beach", type: "Quiet retreats" },
    { city: "Tarkwa Bay", type: "Island getaway" },
    { city: "Ilashe Beach", type: "Weekend escapes" },
    { city: "La Campagne Tropicana", type: "Resort stays" },
    { city: "Akodo Beach", type: "Coastal living" },
    { city: "Elegushi Beach", type: "Beach apartments" },
    { city: "Badagry Beach", type: "Historic coast" },
    { city: "Takwa Bay Island", type: "Private islands" },
    { city: "Lighthouse Beach", type: "Scenic stays" },
  ],
};

export default function InspirationSection() {
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <section className="bg-gray-50 dark:bg-[#1a1a2e] border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Inspiration for future stays
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors
                ${activeTab === tab
                  ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-4">
          {INSPIRATION_DATA[activeTab]?.map((item) => (
            <Link 
              key={item.city} 
              href="/listings" 
              className="block group"
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:underline">
                {item.city}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.type}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
