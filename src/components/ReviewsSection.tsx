"use client";

import { Star } from "lucide-react";

interface ReviewsSectionProps {
  rating: number;
  reviewsCount: number;
}

export default function ReviewsSection({ rating, reviewsCount }: ReviewsSectionProps) {
  
  // Hardcoded for demo/UI purposes
  const ratingsBreakdown = [
    { label: "Cleanliness", score: 4.9 },
    { label: "Accuracy", score: 4.8 },
    { label: "Communication", score: 5.0 },
    { label: "Location", score: 4.9 },
    { label: "Check-in", score: 5.0 },
    { label: "Value", score: 4.7 },
  ];

  const recentReviews = [
    {
      id: 1,
      name: "Tunde",
      date: "September 2025",
      text: "Absolutely stunning penthouse. The views of the Lagoon are incredible, and the WiFi was remarkably fast for my zoom calls. Will definitely book again when I am back in Lagos for business.",
      avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 2,
      name: "Sarah",
      date: "August 2025",
      text: "The check-in process was seamless and the 24/7 security made me feel very safe. It looks exactly like the photos. Highly recommended for corporate travelers.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 3,
      name: "Michael",
      date: "July 2025",
      text: "Great location in Victoria Island, easily accessible to all the major business hubs and restaurants. The host was very responsive.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      id: 4,
      name: "Amina",
      date: "June 2025",
      text: "Beautifully decorated and very clean. The backup power works flawlessly so there are never any interruptions. A true luxury experience.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="py-12 border-t border-gray-200 dark:border-gray-700">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <Star className="w-5 h-5 fill-gray-900 dark:fill-white text-gray-900 dark:text-white" />
        <h2 className="text-[22px] font-semibold text-gray-900 dark:text-white">
          {rating.toFixed(2)} · {reviewsCount} reviews
        </h2>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 mb-8">
        {ratingsBreakdown.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-gray-900 dark:text-white">{item.label}</span>
            <div className="flex items-center gap-3 w-1/2">
              <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-900 dark:bg-white rounded-full" 
                  style={{ width: `${(item.score / 5) * 100}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-900 dark:text-white w-6">{item.score.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-8">
        {recentReviews.map((review) => (
          <div key={review.id} className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={review.avatar} 
                alt={`${review.name}'s avatar`} 
                className="w-12 h-12 rounded-full object-cover bg-gray-200 dark:bg-gray-700"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
              {review.text}
            </p>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <button className="px-6 py-3 border border-gray-900 dark:border-white rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        Show all {reviewsCount} reviews
      </button>

    </div>
  );
}
