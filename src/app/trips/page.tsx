"use client";

import { useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function TripsPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-8">Trips</h1>
      
      <div className="py-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">No trips booked... yet!</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Time to dust off your bags and start planning your next corporate adventure or luxury stay.
        </p>
        <button 
          onClick={() => setIsAuthOpen(true)}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-900 dark:border-white px-8 py-3 rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Start searching
        </button>
      </div>

      <div className="mt-12 py-12 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500">
          Can’t find your reservation here? <a href="#" className="underline font-semibold">Visit our Help Center</a>
        </p>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
