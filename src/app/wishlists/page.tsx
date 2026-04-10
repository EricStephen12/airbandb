"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

export default function WishlistsPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Wishlists</h1>
      
      <div className="max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Log in to view your wishlists</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          You can create, edit, or share wishlists once you’ve logged in.
        </p>
        <button 
          onClick={() => setIsAuthOpen(true)}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Log in
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 opacity-20 pointer-events-none select-none">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
             <Heart className="w-12 h-12 text-gray-300" />
          </div>
        ))}
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
