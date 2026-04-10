"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string | string[];
  beds: number;
  baths: number;
  sqft: number;
  rating?: number;
  badge?: string;
}

export default function PropertyCard({ property, index }: { property: Property; index: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const images = Array.isArray(property.image) ? property.image : [property.image];
  const totalSlides = images.length;

  // Track which dot is active based on scroll position
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const newIndex = Math.round(scrollLeft / clientWidth);
    setActiveSlide(newIndex);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (direction: "left" | "right", e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const offset = direction === "left" ? -clientWidth : clientWidth;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const rating = property.rating ?? (4.5 + Math.random() * 0.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="group relative"
    >
      <div className="block">
        {/* Image Area */}
        <div className="relative rounded-xl overflow-hidden aspect-square mb-3 bg-gray-100 dark:bg-gray-800">
          
          {/* Image Carousel */}
          <div 
            ref={scrollRef}
            className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((img, i) => (
              <Link 
                key={i} 
                href={`/listings/${property.id}`}
                className="w-full h-full shrink-0 snap-center block"
              >
                <img
                  src={img}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>

          {/* Chevron Arrows (desktop hover only) */}
          {totalSlides > 1 && activeSlide > 0 && (
            <button 
              onClick={(e) => scrollTo("left", e)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white hover:scale-105 text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 shadow-md border border-gray-200/50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {totalSlides > 1 && activeSlide < totalSlides - 1 && (
            <button 
              onClick={(e) => scrollTo("right", e)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white hover:scale-105 text-gray-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 shadow-md border border-gray-200/50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

          {/* Heart Favorite */}
          <button 
            onClick={toggleFavorite}
            className="absolute top-3 right-3 z-20"
          >
            <Heart 
              className={`w-6 h-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 ${
                isFavorite 
                  ? 'fill-[#FF385C] text-[#FF385C] scale-110' 
                  : 'fill-black/30 text-white hover:scale-110'
              }`} 
              strokeWidth={2} 
            />
          </button>

          {/* Guest Favorite Badge */}
          {property.badge && (
            <div className="absolute top-3 left-3 z-10 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm border border-gray-100">
              {property.badge}
            </div>
          )}

          {/* Carousel Dot Indicators */}
          {totalSlides > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.slice(0, 5).map((_, i) => (
                <div 
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeSlide === i
                      ? 'bg-white scale-100'
                      : 'bg-white/60 scale-75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Property Info */}
        <Link href={`/listings/${property.id}`} className="block">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-sans font-semibold text-[15px] text-gray-900 dark:text-white line-clamp-1">
              {property.location}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-3.5 h-3.5 fill-gray-900 dark:fill-white text-gray-900 dark:text-white" />
              <span className="text-sm text-gray-900 dark:text-white">{rating.toFixed(2)}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
            {property.title}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {property.beds} bed{property.beds > 1 && "s"} · {property.baths} bath{property.baths > 1 && "s"}
          </p>
          
          <p className="mt-1.5 text-[15px] text-gray-900 dark:text-white">
            <span className="font-semibold">${property.price}</span>{" "}
            <span className="font-normal">night</span>
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
