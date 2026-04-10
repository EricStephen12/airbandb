"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Star, Heart, Share, ChevronLeft, MapPin, Wifi, Car, Coffee, CheckCircle2, Shield, User, Calendar, Award } from "lucide-react";
import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format, differenceInDays, addDays } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

export default function BookingForm({ price }: { price: number }) {
  const [guests, setGuests] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [monthsToShow, setMonthsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setMonthsToShow(window.innerWidth < 640 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 5),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const startDate = dateRange[0].startDate;
  const endDate = dateRange[0].endDate;

  // Calculate nights
  const nights = startDate && endDate && endDate > startDate
    ? differenceInDays(endDate, startDate)
    : 1;

  const totalPrice = price * nights;
  const serviceFee = Math.round(totalPrice * 0.12);
  const grandTotal = totalPrice + serviceFee;

  return (
    <div className="sticky top-24 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 bg-white dark:bg-navy-dark">
      {/* Price */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
        <span className="text-gray-500 dark:text-gray-400">night</span>
      </div>

      {/* Date & Guests Picker */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-xl mb-4 relative" ref={calendarRef}>
        <div className="grid grid-cols-2 border-b border-gray-300 dark:border-gray-600">
          <button 
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="p-3 border-r border-gray-300 dark:border-gray-600 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-tl-xl transition-colors"
          >
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-900 dark:text-white cursor-pointer pointer-events-none">Check-in</label>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              {startDate ? format(startDate, 'MM/dd/yyyy') : 'Add date'}
            </div>
          </button>
          <button 
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            className="p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-tr-xl transition-colors"
          >
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-900 dark:text-white cursor-pointer pointer-events-none">Checkout</label>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              {endDate ? format(endDate, 'MM/dd/yyyy') : 'Add date'}
            </div>
          </button>
        </div>

        {/* Guests Dropdown Row */}
        <div className="p-3 flex justify-between items-center bg-white dark:bg-navy-dark rounded-b-xl border-l border-r border-b border-transparent">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-900 dark:text-white">Guests</label>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{guests} guest{guests > 1 ? "s" : ""}</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm hover:border-gray-900 dark:hover:border-white transition-colors"
            >
              -
            </button>
            <span className="text-sm font-semibold w-4 text-center text-gray-900 dark:text-white">{guests}</span>
            <button 
              onClick={() => setGuests(guests + 1)}
              className="w-7 h-7 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm hover:border-gray-900 dark:hover:border-white transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Interactive Calendar Popover */}
        <AnimatePresence>
          {isCalendarOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-[80px] right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 z-50 bg-white dark:bg-navy-dark shadow-[0_8px_28px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-200 dark:border-gray-700 p-2 sm:p-4 w-[95vw] sm:w-auto overflow-hidden"
            >
              <DateRange
                ranges={dateRange}
                onChange={(item) => setDateRange([item.selection])}
                months={monthsToShow}
                direction={monthsToShow === 1 ? "vertical" : "horizontal"}
                minDate={new Date()}
                showDateDisplay={false}
                rangeColors={['#111']}
              />
              <div className="flex justify-end pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <button 
                  onClick={() => setIsCalendarOpen(false)}
                  className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-bold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reserve Button */}
      <button className="w-full bg-gradient-to-r from-[#E61E4D] to-[#BD1E59] text-white font-bold py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity">
        Reserve
      </button>
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">You won&apos;t be charged yet</p>

      {/* Price Breakdown */}
      <div className="mt-6 space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span className="underline">${price} x {nights} nights</span>
          <span>${totalPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span className="underline">LuxStay service fee</span>
          <span>${serviceFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white pt-3 border-t border-gray-200 dark:border-gray-700">
          <span>Total before taxes</span>
          <span>${grandTotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
