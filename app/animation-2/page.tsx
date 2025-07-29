import { ThemeToggle } from "@/components/theme-toggle"
import { BottomNavbar } from "@/components/bottom-navbar"

export default function Animation2Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center relative transition-colors duration-300">
      <ThemeToggle />
      <BottomNavbar />
      <div>
        <div className="loading-circle">
          <span>
            <div className="radar-line"></div>
          </span>
        </div>
        <div className="block relative">
          <div className="absolute top-8 inset-x-0">
            <div className="card-box w-full">
              <div className="loader-box w-full">
                <div className="words w-full">
                  <span className="word-text">Checking medication name</span>
                  <span className="word-text">Matching insurance plan</span>
                  <span className="word-text">Fetching PA criteria</span>
                  <span className="word-text">Reviewing formulary data</span>
                  <span className="word-text">Analyzing step therapy</span>
                  <span className="word-text">Searching insurance portals</span>
                  <span className="word-text">Parsing policy guidelines</span>
                  <span className="word-text">Running AI analysis</span>
                  <span className="word-text">Verifying diagnosis rules</span>
                  <span className="word-text">Preparing final summary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
