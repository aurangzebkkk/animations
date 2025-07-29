import { ThemeToggle } from "@/components/theme-toggle"
import { BottomNavbar } from "@/components/bottom-navbar"

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative transition-colors duration-300">
      <ThemeToggle />
      <BottomNavbar />
      <div className="loader-wrapper w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
        <span className="loader-letter">G</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">t</span>
        <span className="loader-letter">i</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">g</span>
        <div className="loader"></div>
      </div>
    </div>
  )
}
