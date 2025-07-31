import { ThemeToggle } from "@/components/theme-toggle"
import { BottomNavbar } from "@/components/bottom-navbar"
import SphereAnimation from "@/components/sphere-animation"

export default function Animation4Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative transition-colors duration-300 p-4">
      <ThemeToggle />
      <BottomNavbar />
      <SphereAnimation />
    </div>
  )
}
