"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "listings") {
      crumbs.push({ label: "Properties", href: "/listings" });

      if (segments[1]) {
        crumbs.push({ label: "Property Details" });
      }
    } else if (segments[0] === "legal") {
      crumbs.push({ label: "Legal" });
    } else if (segments[0] === "wishlists") {
      crumbs.push({ label: "Wishlists" });
    } else if (segments[0] === "trips") {
      crumbs.push({ label: "Trips" });
    } else if (segments[0] === "profile") {
      crumbs.push({ label: "Profile" });
    }

    return crumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (pathname === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <ol className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400" />}
              {crumb.href && !isLast ? (
                <Link 
                  href={crumb.href} 
                  className="hover:text-gray-900 dark:hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" />}
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
