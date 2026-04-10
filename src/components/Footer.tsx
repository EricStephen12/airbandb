import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a1a2e] border-t border-gray-200 dark:border-gray-700 pb-24 md:pb-0">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
        
        {/* Three Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/legal" className="hover:underline">Help Center</Link></li>
              <li><Link href="/legal" className="hover:underline">Safety information</Link></li>
              <li><Link href="/legal" className="hover:underline">Cancellation options</Link></li>
              <li><Link href="/legal" className="hover:underline">Report a concern</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">Hosting</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/listings" className="hover:underline">List your property</Link></li>
              <li><Link href="/listings" className="hover:underline">Hosting resources</Link></li>
              <li><Link href="/listings" className="hover:underline">Community forum</Link></li>
              <li><Link href="/legal" className="hover:underline">Responsible hosting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-4">LuxStay</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:underline">Newsroom</Link></li>
              <li><Link href="/" className="hover:underline">New features</Link></li>
              <li><Link href="/" className="hover:underline">Careers</Link></li>
              <li><Link href="/legal" className="hover:underline">Investors</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-600 dark:text-gray-400 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} LuxStay Corporate</span>
            <span className="hidden md:inline">·</span>
            <Link href="/legal" className="hover:underline">Terms</Link>
            <span>·</span>
            <Link href="/legal" className="hover:underline">Sitemap</Link>
            <span>·</span>
            <Link href="/legal" className="hover:underline">Privacy</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 hover:underline font-semibold text-gray-900 dark:text-white">
              <Globe className="w-4 h-4" /> English (US)
            </button>
            <span className="font-semibold text-gray-900 dark:text-white">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
