import Link from "next/link";
import { ShieldCheck, TrendingUp, Key } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#030814]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Choose Us
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
              Our properties are verified for quality. Each one includes fast WiFi, 24/7 support, and secure access so you can work comfortably.
            </p>
            
            <div className="space-y-6 mb-10 text-white/90">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-6 h-6 text-white" />
                <span className="text-lg">Secure & Private</span>
              </div>
              <div className="flex items-center gap-4">
                <TrendingUp className="w-6 h-6 text-white" />
                <span className="text-lg">Dedicated Workspaces</span>
              </div>
              <div className="flex items-center gap-4">
                <Key className="w-6 h-6 text-white" />
                <span className="text-lg">Keyless Entry & Support</span>
              </div>
            </div>
            
            <Link href="/listings" className="inline-block bg-white text-navy font-bold px-8 py-4 rounded-full text-center hover:bg-gray-100 transition-colors self-start shadow-xl">
              Find Your Stay
            </Link>
          </div>
          <div className="md:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Corporate Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
