import FeaturedProperties from "@/components/FeaturedProperties";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <FeaturedProperties />
      <FeaturesSection />
    </div>
  );
}
