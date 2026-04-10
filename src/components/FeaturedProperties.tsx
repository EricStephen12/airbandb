import PropertyCard, { Property } from "@/components/PropertyCard";
import CategoryBar from "@/components/CategoryBar";

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Executive Penthouse Suite",
    location: "Victoria Island, Lagos",
    price: 450,
    image: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 3,
    baths: 3,
    sqft: 3200,
    rating: 4.92,
    badge: "Guest favorite",
  },
  {
    id: "2",
    title: "Lekki Phase 1 Luxury Flat",
    location: "Lekki Phase 1, Lagos",
    price: 320,
    image: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 4,
    baths: 4,
    sqft: 4000,
    rating: 4.97,
    badge: "Superhost",
  },
  {
    id: "3",
    title: "Modern Ikoyi Apartment",
    location: "Ikoyi, Lagos",
    price: 550,
    image: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 2,
    baths: 2,
    sqft: 2200,
    rating: 4.85,
  },
  {
    id: "4",
    title: "Banana Island Villa",
    location: "Banana Island, Lagos",
    price: 1200,
    image: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 5,
    baths: 5,
    sqft: 6500,
    rating: 4.99,
    badge: "Guest favorite",
  },
  {
    id: "5",
    title: "Ikeja GRA Smart Home",
    location: "Ikeja GRA, Lagos",
    price: 180,
    image: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 3,
    baths: 3,
    sqft: 2800,
    rating: 4.78,
  },
  {
    id: "6",
    title: "Eko Atlantic Waterfront",
    location: "Eko Atlantic, Lagos",
    price: 800,
    image: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    ],
    beds: 4,
    baths: 4,
    sqft: 4500,
    rating: 4.95,
    badge: "Superhost",
  },
];

export default function FeaturedProperties() {
  return (
    <section className="bg-white dark:bg-navy-dark">
      <CategoryBar />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10">
          {FEATURED_PROPERTIES.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
