"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Building, MapIcon, Wifi, Star, Building2, Home, TreePine, Waves, Briefcase, Coffee, Compass, Gem, SlidersHorizontal } from "lucide-react";
import FiltersModal from "@/components/FiltersModal";

const CATEGORIES = [
  { name: "Executive Suites", Icon: Building },
  { name: "Downtown", Icon: MapIcon },
  { name: "Fast WiFi", Icon: Wifi },
  { name: "Luxe", Icon: Gem },
  { name: "Penthouses", Icon: Building2 },
  { name: "Villas", Icon: Home },
  { name: "Retreats", Icon: TreePine },
  { name: "Beachfront", Icon: Waves },
  { name: "Workspace", Icon: Briefcase },
  { name: "Lounge Access", Icon: Coffee },
  { name: "Trending", Icon: Compass },
  { name: "Top Rated", Icon: Star },
];

export default function CategoryBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const checkScrollability = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = direction === "left" ? -200 : 200;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full bg-white dark:bg-navy-dark border-b border-gray-200 dark:border-gray-700 sticky top-20 z-30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-[72px] justify-between gap-4">
            
            {/* Scrollable Categories Container */}
            <div className="relative flex items-center flex-grow overflow-hidden h-full">
              {/* Left Scroll Arrow */}
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 z-20 w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-800 dark:text-white" />
                </button>
              )}

              {/* Scrollable Categories */}
              <div 
                ref={scrollRef}
                onScroll={checkScrollability}
                className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2 h-full items-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {CATEGORIES.map((category, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <button
                      key={category.name}
                      onClick={() => setActiveIndex(index)}
                      className={`group flex flex-col items-center justify-center min-w-max h-[70px] border-b-[2px] transition-all duration-200
                        ${isActive 
                          ? 'border-gray-900 dark:border-white' 
                          : 'border-transparent hover:border-gray-300 dark:hover:border-gray-500'
                        }
                      `}
                    >
                      <category.Icon 
                        className={`w-6 h-6 mb-1.5 transition-colors duration-200
                          ${isActive 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                          }
                        `}
                      />
                      <span 
                        className={`text-xs transition-colors duration-200 whitespace-nowrap
                          ${isActive 
                            ? 'font-semibold text-gray-900 dark:text-white' 
                            : 'font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                          }
                        `}
                      >
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Scroll Arrow */}
              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 z-20 w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <ChevronRight className="w-4 h-4 text-gray-800 dark:text-white" />
                </button>
              )}
              
              {/* Edge Gradients */}
              {canScrollLeft && (
                <div className="absolute left-8 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-navy-dark to-transparent pointer-events-none z-10" />
              )}
              {canScrollRight && (
                <div className="absolute right-8 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-navy-dark to-transparent pointer-events-none z-10" />
              )}
            </div>

            {/* Filters Button */}
            <div className="hidden md:flex shrink-0 items-center">
              <button 
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4 text-gray-900 dark:text-white" />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Filters</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
      
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </>
  );
}
