"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-context"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm border-gray-200 flex items-center gap-2 px-3 py-2 h-auto"
      >
        <Sun className="h-4 w-4 text-yellow-500" />
        <span className="text-sm font-medium text-gray-900">Light mode</span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center gap-2 px-3 py-2 h-auto"
    >
      {theme === "light" ? (
        <>
          <Sun className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium text-gray-900">Light mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-white">Dark mode</span>
        </>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
