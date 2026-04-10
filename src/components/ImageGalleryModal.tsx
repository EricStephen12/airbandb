"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ImageGalleryModalProps {
  images: string[];
  initialIndex: number | null;
  onClose: () => void;
}

export default function ImageGalleryModal({ images, initialIndex, onClose }: ImageGalleryModalProps) {
  const isOpen = initialIndex !== null;
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  useEffect(() => {
    if (initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-white dark:bg-[#1a1a2e] flex flex-col"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:px-8 sm:py-6">
          <button 
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentIndex + 1} / {images.length}
          </span>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Image Display */}
        <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8">
          
          <button 
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors shadow-lg group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
          </button>

          <img 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-contain max-h-[80vh]"
          />

          <button 
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors shadow-lg group"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Thumbnail Strip (Optional, hidden on small screens) */}
        <div className="hidden sm:flex h-24 items-center justify-center gap-2 mb-6 px-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 w-24 rounded overflow-hidden transition-all ${
                idx === currentIndex 
                  ? "ring-2 ring-gray-900 dark:ring-white opacity-100" 
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
