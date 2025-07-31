import { ThemeToggle } from "@/components/theme-toggle"
import { BottomNavbar } from "@/components/bottom-navbar"
import { cn } from "@/lib/utils"

export default function Animation3Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative transition-colors duration-300 p-4">
      <ThemeToggle />
      <BottomNavbar />
      <div className="flex items-center gap-4">
        <div className="relative flex h-10 w-10 justify-center items-center">
          <span className="absolute inline-flex h-full w-full rounded-full opacity-75 ping-animation bg-[rgba(68,154,252,1)]"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-[rgba(0,122,255,1)]"></span>
        </div>
        <div className={cn("px-4 py-2 rounded-full text-[rgba(6,95,70,1)] font-medium", "bg-[rgba(209,250,229,1)]")}>Approved With Progress Notes</div>
      </div>
    </div>
  )
}
