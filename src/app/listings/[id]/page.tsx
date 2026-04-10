"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { BedDouble, Bath, Square, MapPin, CheckCircle2, Wifi, Coffee, Car, Star, Heart, Share, ChevronLeft, Shield, User, Award, DoorOpen, Sparkles, AirVent, Tv, Utensils, WashingMachine } from "lucide-react";
import { useParams } from "next/navigation";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import ReviewsSection from "@/components/ReviewsSection";

const PropertyMap = dynamic(() => import("@/components/PropertyMap"), { 
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />
});

export default function PropertyDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const property = {
    id,
    title: "Executive Penthouse Suite",
    location: "Victoria Island, Lagos",
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
    ],
    beds: 3,
    baths: 3,
    sqft: 3200,
    guests: 6,
    rating: 4.92,
    reviews: 147,
    description: "A fully furnished penthouse on Victoria Island with floor-to-ceiling windows and great views of the Lagos lagoon. 10 minutes from Eko Hotel and the business district. Fast WiFi, backup power, and secure parking included. The apartment comes with a fully equipped kitchen, washer/dryer, and a dedicated workspace.",
    host: {
      name: "Chidi",
      badge: "Superhost",
      joined: "2020",
      responseRate: "98%",
      responseTime: "within an hour",
    },
    amenities: [
      { icon: Wifi, label: "Fast WiFi (100 Mbps)" },
      { icon: AirVent, label: "Air conditioning" },
      { icon: Car, label: "Private parking" },
      { icon: Tv, label: "55\" Smart TV" },
      { icon: Utensils, label: "Full kitchen" },
      { icon: WashingMachine, label: "Washer & dryer" },
      { icon: DoorOpen, label: "Self check-in" },
      { icon: Sparkles, label: "Cleaning included" },
      { icon: Shield, label: "24/7 security" },
      { icon: Coffee, label: "Coffee maker" },
    ],
  };

  const mapMarkers = [
    { id: property.id, lat: 6.4281, lng: 3.4219, price: property.price, title: property.location }
  ];

  return (
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-[26px] font-semibold text-gray-900 dark:text-white mb-2">
          {property.title}
        </h1>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-gray-900 dark:fill-white text-gray-900 dark:text-white" />
              <span className="font-semibold text-gray-900 dark:text-white">{property.rating}</span>
            </div>
            <span className="text-gray-500">·</span>
            <span className="underline text-gray-900 dark:text-white font-medium">{property.reviews} reviews</span>
            <span className="text-gray-500">·</span>
            <span className="flex items-center gap-1">
              {property.host.badge === "Superhost" && <Award className="w-4 h-4" />}
              <span className="font-medium text-gray-900 dark:text-white">{property.host.badge}</span>
            </span>
            <span className="text-gray-500">·</span>
            <span className="underline font-medium text-gray-900 dark:text-white">{property.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white underline hover:opacity-70 transition-opacity">
              <Share className="w-4 h-4" /> Share
            </button>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white underline hover:opacity-70 transition-opacity"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery - Airbnb 5-image grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-10 rounded-xl overflow-hidden h-[300px] md:h-[400px] lg:h-[450px]">
        <div className="md:col-span-2 md:row-span-2 h-full">
          <img onClick={() => setActiveGalleryIndex(0)} src={property.images[0]} alt="Main" className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
        </div>
        <div className="hidden md:block h-full">
          <img onClick={() => setActiveGalleryIndex(1)} src={property.images[1]} alt="Gallery" className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
        </div>
        <div className="hidden md:block h-full">
          <img onClick={() => setActiveGalleryIndex(2)} src={property.images[2]} alt="Gallery" className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
        </div>
        <div className="hidden md:block h-full">
          <img onClick={() => setActiveGalleryIndex(3)} src={property.images[3]} alt="Gallery" className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
        </div>
        <div className="hidden md:block h-full relative">
          <img onClick={() => setActiveGalleryIndex(4)} src={property.images[4]} alt="Gallery" className="w-full h-full object-cover hover:opacity-90 transition-opacity cursor-pointer" />
          <button onClick={() => setActiveGalleryIndex(0)} className="absolute bottom-3 right-3 bg-white text-gray-900 text-xs font-semibold px-4 py-2 rounded-lg border border-gray-900 hover:bg-gray-100 transition-colors shadow-sm">
            Show all photos
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Host Info */}
          <div className="flex justify-between items-start pb-8 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                Entire apartment hosted by {property.host.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {property.guests} guests · {property.beds} bedrooms · {property.baths} bathrooms · {property.sqft} sqft
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-900 dark:bg-gray-600 flex items-center justify-center shrink-0 ml-4">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-6">
              <DoorOpen className="w-8 h-8 text-gray-700 dark:text-gray-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Self check-in</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Check yourself in with the smart lock.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Award className="w-8 h-8 text-gray-700 dark:text-gray-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{property.host.name} is a Superhost</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Superhosts are experienced, highly rated hosts.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <MapPin className="w-8 h-8 text-gray-700 dark:text-gray-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Great location</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">95% of recent guests gave the location a 5-star rating.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="pb-8 border-b border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="pb-8 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">What this place offers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity.label} className="flex items-center gap-4 py-2">
                  <amenity.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <span className="text-base text-gray-700 dark:text-gray-300">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="pb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Where you'll be</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{property.location}</p>
            <div className="h-[400px] rounded-xl overflow-hidden">
              <PropertyMap markers={mapMarkers} />
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div>
          <BookingForm price={property.price} />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <ReviewsSection rating={property.rating} reviewsCount={property.reviews} />
      </div>

      <ImageGalleryModal 
        images={property.images} 
        initialIndex={activeGalleryIndex} 
        onClose={() => setActiveGalleryIndex(null)} 
      />
    </div>
  );
}
