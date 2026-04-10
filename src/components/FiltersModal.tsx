"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FiltersModal({ isOpen, onClose }: FiltersModalProps) {
  const [minPrice, setMinPrice] = useState("50");
  const [maxPrice, setMaxPrice] = useState("1000");
  const [placeType, setPlaceType] = useState<string>("any");
  const [beds, setBeds] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const amenitiesList = [
    "Wifi", "Kitchen", "Washer", "Dryer", "Air conditioning",
    "Heating", "Dedicated workspace", "TV", "Hair dryer", "Iron"
  ];
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearAll = () => {
    setMinPrice("50");
    setMaxPrice("1000");
    setPlaceType("any");
    setBeds(0);
    setBedrooms(0);
    setBathrooms(0);
    setSelectedAmenities([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[780px] bg-white dark:bg-[#1a1a2e] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col h-[90vh] max-h-[800px] mt-auto sm:mt-0"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={onClose}
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
              <h2 className="text-base font-bold text-gray-900 dark:text-white">Filters</h2>
              <div className="w-9" /> {/* Spacer for centering */}
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-10">
              
              {/* Type of Place */}
              <section className="pb-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Type of place</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">Search rooms, entire homes, or any type of place.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "any", title: "Any type", desc: "Search all types of properties" },
                    { id: "entire", title: "Entire place", desc: "A place all to yourself" },
                    { id: "room", title: "Private room", desc: "Your own room, plus access to shared spaces" }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPlaceType(type.id)}
                      className={`flex flex-col text-left p-4 rounded-xl border-2 transition-colors ${
                        placeType === type.id
                          ? "border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800"
                          : "border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white"
                      }`}
                    >
                      <span className="font-semibold text-gray-900 dark:text-white">{type.title}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{type.desc}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Price Range */}
              <section className="pb-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Price range</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <label className="absolute top-2 left-3 text-[10px] uppercase font-bold text-gray-500">Minimum</label>
                    <div className="relative">
                      <span className="absolute left-3 top-6 text-gray-900 dark:text-white font-semibold">$</span>
                      <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="w-full pt-6 pb-2 pl-7 pr-3 border border-gray-400 dark:border-gray-600 rounded-xl outline-none focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white bg-transparent"
                      />
                    </div>
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="flex-1 relative">
                    <label className="absolute top-2 left-3 text-[10px] uppercase font-bold text-gray-500">Maximum</label>
                    <div className="relative">
                      <span className="absolute left-3 top-6 text-gray-900 dark:text-white font-semibold">$</span>
                      <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="w-full pt-6 pb-2 pl-7 pr-3 border border-gray-400 dark:border-gray-600 rounded-xl outline-none focus:border-gray-900 dark:focus:border-white text-gray-900 dark:text-white bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Rooms and Beds */}
              <section className="pb-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Rooms and beds</h3>
                <div className="space-y-6">
                  {/* Stepper Row */}
                  {[
                    { label: "Bedrooms", value: bedrooms, set: setBedrooms },
                    { label: "Beds", value: beds, set: setBeds },
                    { label: "Bathrooms", value: bathrooms, set: setBathrooms }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-[17px] text-gray-800 dark:text-gray-200">{item.label}</span>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => item.set(Math.max(0, item.value - 1))}
                          disabled={item.value === 0}
                          className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-900 dark:hover:border-white text-gray-600 dark:text-gray-300 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-4 text-center font-semibold text-gray-900 dark:text-white">
                          {item.value === 0 ? "Any" : item.value}
                        </span>
                        <button
                          onClick={() => item.set(item.value + 1)}
                          className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:border-gray-900 dark:hover:border-white text-gray-600 dark:text-gray-300 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Amenities */}
              <section className="pb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {amenitiesList.map((amenity) => {
                    const isSelected = selectedAmenities.includes(amenity);
                    return (
                      <label key={amenity} className="flex items-center gap-4 cursor-pointer group">
                        <div className={`w-6 h-6 rounded flex items-center justify-center border transition-colors ${
                          isSelected 
                            ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white' 
                            : 'border-gray-300 dark:border-gray-600 group-hover:border-gray-900 dark:group-hover:border-white'
                        }`}>
                          {isSelected && <Check className="w-4 h-4 text-white dark:text-gray-900" strokeWidth={3} />}
                        </div>
                        <input 
                          type="checkbox" 
                          className="hidden" 
                          checked={isSelected}
                          onChange={() => toggleAmenity(amenity)}
                        />
                        <span className="text-[17px] text-gray-800 dark:text-gray-200">{amenity}</span>
                      </label>
                    );
                  })}
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a2e] rounded-b-2xl">
              <button 
                onClick={clearAll}
                className="underline text-gray-900 dark:text-white font-semibold hover:opacity-70 transition-opacity"
              >
                Clear all
              </button>
              <button 
                onClick={onClose}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
              >
                Show 14 stays
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
