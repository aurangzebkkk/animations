"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNavbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full px-2 py-2">
      <div className="flex items-center gap-x-0.5">
        <Link
          href="/"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            pathname === "/"
              ? "bg-gray-900 text-white dark:bg-white dark:text-black"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          A-1
        </Link>
        <Link
          href="/animation-2"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            pathname === "/animation-2"
              ? "bg-gray-900 text-white dark:bg-white dark:text-black"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          A-2
        </Link>
        <Link
          href="/animation-3"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            pathname === "/animation-3"
              ? "bg-gray-900 text-white dark:bg-white dark:text-black"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          A-3
        </Link>
        <Link
          href="/animation-4"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            pathname === "/animation-4"
              ? "bg-gray-900 text-white dark:bg-white dark:text-black"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          A-4
        </Link>
      </div>
    </nav>
  )
}
