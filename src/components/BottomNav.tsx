"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down and we scrolled past 100px, hide it. 
      // If scrolling up, show it.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-navy-dark border-t border-gray-200 dark:border-gray-800 flex justify-around items-center pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] z-50 px-2 h-[4.5rem]"
        >
          <Link 
            href="/" 
            className={`flex flex-col items-center gap-1 ${pathname === '/' ? 'text-navy dark:text-white' : 'text-gray-500'}`}
          >
            <Search className="w-6 h-6" />
            <span className="text-[10px] font-medium">Explore</span>
          </Link>
          <Link 
            href="/wishlists" 
            className={`flex flex-col items-center gap-1 ${pathname === '/wishlists' ? 'text-navy dark:text-white' : 'text-gray-500'}`}
          >
            <Heart className="w-6 h-6" />
            <span className="text-[10px] font-medium">Wishlists</span>
          </Link>
          <Link 
            href="/trips" 
            className={`flex flex-col items-center gap-1 ${pathname === '/trips' ? 'text-navy dark:text-white' : 'text-gray-500'}`}
          >
            <img src="https://cdn-icons-png.flaticon.com/128/3004/3004122.png" alt="logo" className={`w-6 h-6 ${pathname === '/trips' ? 'opacity-100' : 'opacity-50 grayscale'} dark:invert`} />
            <span className="text-[10px] font-medium">Trips</span>
          </Link>
          <Link 
            href="/profile" 
            className={`flex flex-col items-center gap-1 ${pathname === '/profile' ? 'text-navy dark:text-white' : 'text-gray-500'}`}
          >
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
