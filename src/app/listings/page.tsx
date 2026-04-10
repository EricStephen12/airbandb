"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PropertyCard, { Property } from "@/components/PropertyCard";
import CategoryBar from "@/components/CategoryBar";
import { Map, X, List } from "lucide-react";

// Lazy load the map so it doesn't break SSR
const PropertyMap = dynamic(() => import("@/components/PropertyMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />
});

const ALL_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Executive Penthouse Suite",
    location: "Victoria Island, Lagos",
    price: 450,
    image: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 3, baths: 3, sqft: 3200, rating: 4.92, badge: "Guest favorite",
  },
  {
    id: "2",
    title: "Lekki Phase 1 Luxury Flat",
    location: "Lekki Phase 1, Lagos",
    price: 320,
    image: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 4, baths: 4, sqft: 4000, rating: 4.97, badge: "Superhost",
  },
  {
    id: "3",
    title: "Modern Ikoyi Apartment",
    location: "Ikoyi, Lagos",
    price: 550,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    beds: 2, baths: 2, sqft: 2200, rating: 4.85,
  },
  {
    id: "4",
    title: "Banana Island Villa",
    location: "Banana Island, Lagos",
    price: 1200,
    image: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 5, baths: 5, sqft: 6500, rating: 4.99, badge: "Guest favorite",
  },
  {
    id: "5",
    title: "Ikeja GRA Smart Home",
    location: "Ikeja GRA, Lagos",
    price: 180,
    image: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 3, baths: 3, sqft: 2800, rating: 4.78,
  },
  {
    id: "6",
    title: "Eko Atlantic Waterfront",
    location: "Eko Atlantic, Lagos",
    price: 800,
    image: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 4, baths: 4, sqft: 4500, rating: 4.95, badge: "Superhost",
  },
  {
    id: "7",
    title: "Oniru Beach Apartment",
    location: "Oniru, Lagos",
    price: 380,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
    beds: 2, baths: 2, sqft: 1800, rating: 4.82,
  },
  {
    id: "8",
    title: "Magodo Phase 2 Duplex",
    location: "Magodo, Lagos",
    price: 150,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    beds: 4, baths: 3, sqft: 3500, rating: 4.71,
  },
];

// Lagos coordinates for each property
const MAP_MARKERS = [
  { id: "1", lat: 6.4281, lng: 3.4219, price: 450, title: "Victoria Island" },
  { id: "2", lat: 6.4478, lng: 3.4723, price: 320, title: "Lekki Phase 1" },
  { id: "3", lat: 6.4541, lng: 3.4346, price: 550, title: "Ikoyi" },
  { id: "4", lat: 6.4600, lng: 3.4250, price: 1200, title: "Banana Island" },
  { id: "5", lat: 6.5856, lng: 3.3389, price: 180, title: "Ikeja GRA" },
  { id: "6", lat: 6.4150, lng: 3.4050, price: 800, title: "Eko Atlantic" },
  { id: "7", lat: 6.4350, lng: 3.4450, price: 380, title: "Oniru" },
  { id: "8", lat: 6.6300, lng: 3.3800, price: 150, title: "Magodo" },
];

export default function ListingsPage() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="w-full">
      <CategoryBar />
      
      <div className="flex w-full relative" style={{ height: "calc(100vh - 152px)" }}>
        
        {/* Left: Property Listings */}
        <div className={`${showMap ? 'hidden lg:block lg:w-[55%]' : 'w-full'} overflow-y-auto transition-all duration-300`}>
          <div className={`max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 ${showMap ? 'max-w-none' : ''}`}>
            <div className={`grid gap-x-6 gap-y-10 ${
              showMap 
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
            }`}>
              {ALL_PROPERTIES.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Map */}
        {showMap && (
          <div className="w-full lg:w-[45%] sticky top-[152px] h-full">
            <PropertyMap 
              markers={MAP_MARKERS}
              onMarkerClick={(id) => {
                const el = document.getElementById(`property-${id}`);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>

      {/* Toggle Map / List Button */}
      <button
        onClick={() => setShowMap(!showMap)}
        className="fixed bottom-28 md:bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-3 rounded-full flex items-center gap-2 shadow-xl z-40 font-bold text-sm hover:scale-105 transition-transform"
      >
        {showMap ? (
          <>
            Show list <List className="w-4 h-4" />
          </>
        ) : (
          <>
            Show map <Map className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
