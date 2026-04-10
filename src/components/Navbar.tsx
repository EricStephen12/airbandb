"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Building, Search, SlidersHorizontal, Globe, User, X, ChevronDown, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import AuthModal from "@/components/AuthModal";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/listings" },
    { name: "Legal", href: "/legal" },
  ];

  const handleSearch = () => {
    setIsSearchOpen(false);
    router.push(`/listings?q=${encodeURIComponent(searchQuery)}`);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-navy-dark border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Building className="w-8 h-8 text-navy dark:text-white" />
              </motion.div>
              <span className="font-sans font-bold text-xl tracking-tight text-navy dark:text-white">
                LuxStay
              </span>
            </Link>

            {/* Center Search Pill */}
            <button 
              onClick={openSearch}
              className="flex items-center rounded-full border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-md transition-shadow px-2 py-2 gap-0 mx-auto cursor-pointer"
            >
              <div className="px-4 py-1 text-sm font-semibold text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                Lagos
              </div>
              <div className="px-4 py-1 text-sm font-semibold text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">
                Any week
              </div>
              <div className="px-4 py-1 text-sm text-gray-500 dark:text-gray-400">
                Add guests
              </div>
              <div className="ml-2 w-8 h-8 rounded-full bg-navy dark:bg-white flex items-center justify-center">
                <Search className="w-4 h-4 text-white dark:text-navy" />
              </div>
            </button>

            {/* Right Side */}
            <div className="flex gap-4 items-center shrink-0">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-2
                    ${pathname === link.href 
                      ? "text-gray-900 dark:text-white" 
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }
                  `}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-900 dark:bg-white"
                    />
                  )}
                </Link>
              ))}
              
              {/* User Menu Pill */}
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-3 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 hover:shadow-md transition-all ml-2 bg-white dark:bg-gray-800"
                >
                  <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  <div className="w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-12 w-[240px] bg-white dark:bg-gray-800 rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.15)] border border-gray-200 dark:border-gray-700 py-2 z-50 origin-top-right"
                    >
                      <button 
                        onClick={() => { setIsAuthOpen(true); setIsUserMenuOpen(false); }}
                        className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Sign up
                      </button>
                      <button 
                        onClick={() => { setIsAuthOpen(true); setIsUserMenuOpen(false); }}
                        className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Log in
                      </button>
                      <div className="h-px bg-gray-200 dark:bg-gray-700 my-2" />
                      <button 
                        className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Host your home
                      </button>
                      <button 
                        className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        Help
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center h-16 px-1">
            <button 
              onClick={openSearch}
              className="w-full bg-white dark:bg-gray-800 rounded-full shadow-[0_3px_12px_rgba(0,0,0,0.08)] border border-gray-200 dark:border-gray-700 flex items-center px-4 py-2.5 gap-3 active:scale-[0.98] transition-transform"
            >
              <Search className="w-5 h-5 text-gray-900 dark:text-white shrink-0" />
              <div className="flex flex-col flex-grow text-left">
                <span className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">Where to?</span>
                <span className="text-[11px] text-gray-500 font-normal">
                  Lagos · Any week · Add guests
                </span>
              </div>
              <div className="p-2 border border-gray-300 dark:border-gray-600 rounded-full shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-900 dark:text-white" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Expanded Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[60]"
              onClick={() => setIsSearchOpen(false)}
            />

            {/* Search Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 bg-white dark:bg-navy-dark z-[70] shadow-2xl"
            >
              <div className="max-w-3xl mx-auto px-4 py-6">
                {/* Close Button */}
                <button 
                  onClick={() => setIsSearchOpen(false)} 
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-white" />
                </button>

                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Search properties</h2>

                {/* Input Fields */}
                <div className="space-y-4">
                  <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 focus-within:border-gray-900 dark:focus-within:border-white transition-colors">
                    <label className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Where</label>
                    <input 
                      ref={inputRef}
                      type="text"
                      placeholder="Search Lagos areas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="w-full mt-1 outline-none text-gray-800 dark:text-white placeholder-gray-400 bg-transparent text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 focus-within:border-gray-900 dark:focus-within:border-white transition-colors">
                      <label className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Check in</label>
                      <input 
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full mt-1 outline-none text-gray-800 dark:text-white bg-transparent text-sm"
                      />
                    </div>
                    <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4 focus-within:border-gray-900 dark:focus-within:border-white transition-colors">
                      <label className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Check out</label>
                      <input 
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full mt-1 outline-none text-gray-800 dark:text-white bg-transparent text-sm"
                      />
                    </div>
                  </div>

                  <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-4">
                    <label className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Guests</label>
                    <div className="flex items-center justify-between mt-2">
                      <button 
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-gray-800 dark:hover:border-white transition-colors"
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{guests} guest{guests > 1 ? "s" : ""}</span>
                      <button 
                        onClick={() => setGuests(guests + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-gray-800 dark:hover:border-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="w-full mt-6 bg-navy dark:bg-white text-white dark:text-navy font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-base"
                >
                  <Search className="w-5 h-5" /> Search
                </button>

                {/* Quick Suggestions */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Popular areas</p>
                  <div className="flex flex-wrap gap-2">
                    {["Victoria Island", "Lekki", "Ikoyi", "Banana Island", "Eko Atlantic", "Ikeja GRA"].map((area) => (
                      <button
                        key={area}
                        onClick={() => { setSearchQuery(area); handleSearch(); }}
                        className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
