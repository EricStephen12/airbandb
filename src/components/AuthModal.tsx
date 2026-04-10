"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
          className="relative w-full max-w-[568px] bg-white dark:bg-[#1a1a2e] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[95vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
            <h2 className="text-base font-bold text-gray-900 dark:text-white">
              {authMode === "login" ? "Log in" : "Sign up"}
            </h2>
            <div className="w-9" /> {/* Spacer */}
          </div>

          {/* Form Content */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Welcome to LuxStay
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="border border-gray-400 dark:border-gray-600 rounded-xl overflow-hidden focus-within:border-gray-900 dark:focus-within:border-white transition-colors relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email or Phone number"
                  className="w-full pt-4 pb-4 px-4 outline-none text-gray-900 dark:text-white bg-transparent text-base"
                />
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                We'll call or text you to confirm your number. Standard message and data rates apply.{" "}
                <a href="/legal" className="underline font-semibold hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </a>
              </p>

              <button className="w-full bg-gradient-to-r from-[#E61E4D] to-[#BD1E59] text-white font-bold py-3.5 rounded-xl text-base hover:opacity-90 transition-opacity disabled:opacity-50">
                Continue
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1" />
              <span className="text-xs text-gray-500 dark:text-gray-400">or</span>
              <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1" />
            </div>

            {/* Social Logins */}
            <div className="space-y-4">
              <button className="relative w-full flex items-center justify-center p-3.5 border border-gray-900 dark:border-gray-500 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <svg className="absolute left-4 w-5 h-5 text-[#4285F4]" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">Continue with Google</span>
              </button>

              <button className="relative w-full flex items-center justify-center p-3.5 border border-gray-900 dark:border-gray-500 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <svg className="absolute left-4 w-5 h-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.76 1.5-.02 2.65.65 3.36 1.76-2.91 1.76-2.45 5.56.32 6.67-.66 1.57-1.46 3.04-2.34 4.5zm-5.46-13.8c-.3-1.63.5-3.27 1.83-4.14 0-.02-.02-.02-.02-.02.42 1.63-.44 3.3-1.81 4.16z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">Continue with Apple</span>
              </button>

              <button className="relative w-full flex items-center justify-center p-3.5 border border-gray-900 dark:border-gray-500 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Mail className="absolute left-4 w-5 h-5 text-gray-900 dark:text-white" />
                <span className="font-semibold text-gray-900 dark:text-white text-sm">Continue with Email</span>
              </button>
            </div>
            
            <div className="mt-6 flex justify-center">
              <button 
                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                className="text-sm font-semibold text-gray-900 dark:text-white underline hover:opacity-70"
              >
                {authMode === "login" ? "Don't have an account? Sign up" : "Already have an account? Log in"}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
