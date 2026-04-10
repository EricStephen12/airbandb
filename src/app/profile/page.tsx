"use client";

import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import { User, ChevronRight, Settings, ShieldCheck, HelpCircle } from "lucide-react";

export default function ProfilePage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const menuItems = [
    { label: "Personal info", icon: User },
    { label: "Login & security", icon: ShieldCheck },
    { label: "Payments & payouts", icon: HelpCircle }, // Using placeholder icon
    { label: "Settings", icon: Settings },
  ];

  return (
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <User className="w-8 h-8 text-gray-500" />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Log in to manage your account</h2>
        <button 
          onClick={() => setIsAuthOpen(true)}
          className="text-gray-900 dark:text-white underline font-semibold hover:opacity-70"
        >
          Go to login
        </button>
      </div>

      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setIsAuthOpen(true)}
            className="w-full flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors px-2 -mx-2 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <item.icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              <span className="text-lg text-gray-800 dark:text-gray-200">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <button className="text-sm font-semibold text-gray-900 dark:text-white underline">
          Terms of Service
        </button>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}
