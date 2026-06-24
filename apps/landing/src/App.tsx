import { useState, useEffect } from "react"
import { ShieldCheck } from "lucide-react"
import { TopNavBar } from "./components/TopNavBar"
import { Footer } from "./components/Footer"
import { JoinModal } from "./components/JoinModal"
import { WorkspaceBadge } from "./components/WorkspaceBadge"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { OrganigramPage } from "./pages/OrganigramPage"
import { useJoinForm } from "./hooks/useJoinForm"
import { useWorkspaceStore } from "./stores/workspaceStore"

const routes = ["/", "/about", "/organigram", "/contact"]

export default function App() {
  // Routing State
  const [route, setRoute] = useState(
    routes.includes(window.location.pathname) ? window.location.pathname : "/"
  )

  // Modal State
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  // Theme State (initialized from class on html or local storage)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        return savedTheme === "dark"
      }
      return document.documentElement.classList.contains("dark")
    }
    return false
  })

  // Apply theme class whenever isDark changes
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove("light")
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      root.classList.add("light")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  // Listen for popstate (browser back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setRoute(routes.includes(window.location.pathname) ? window.location.pathname : "/")
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Hook up join form and workspace store for inline contact page fallback
  const { guild, setGuild } = useWorkspaceStore()
  const { register, handleSubmit, errors, lastSubmission } = useJoinForm()

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  // Render Page Content dynamically based on route
  const renderContent = () => {
    switch (route) {
      case "/":
        return <HomePage onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      case "/about":
        return <AboutPage />
      case "/organigram":
        return <OrganigramPage />
      case "/contact":
        return (
          <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop flex flex-col items-center justify-center flex-grow w-full">
            <div className="w-full max-w-md rounded-xl border border-outline-variant bg-surface p-8 shadow-xl dark:shadow-black/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-h3 text-h3 text-on-surface leading-tight">Access Clearance</h2>
                  <p className="text-xs text-on-surface-variant font-label-caps uppercase tracking-widest mt-0.5">
                    Operational Interest Registry
                  </p>
                </div>
              </div>

              <div className="mb-6 flex items-center gap-3">
                <span className="text-sm text-on-surface-variant font-body-md">Selected Path:</span>
                <WorkspaceBadge value={guild} />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-label-caps text-on-surface-variant mb-2">
                  CHOOSE DIVISION PATH
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["RED_TEAMING", "BLUE_TEAMING", "YELLOW_TEAMING", "WHITE_TEAMING"].map((value) => {
                    const isSelected = guild === value
                    return (
                      <button
                        className={`border border-outline-variant rounded p-2 text-center text-xs font-bold transition-all duration-200 ${
                          isSelected
                            ? "bg-primary text-on-primary border-transparent"
                            : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                        }`}
                        key={value}
                        onClick={() => setGuild(value)}
                        type="button"
                      >
                        {value.replace("_TEAMING", " TEAM")}
                      </button>
                    )
                  })}
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-label-caps text-on-surface-variant mb-2">
                    SECURE EMAIL ADDRESS
                  </label>
                  <input
                    className="w-full rounded border border-outline-variant bg-surface-container-low p-3 font-mono-code text-mono-code text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="operator@tiss.or.id"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs font-bold text-red-team">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>
                <button
                  className="w-full bg-primary text-on-primary font-label-caps text-label-caps px-4 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors font-bold"
                  type="submit"
                >
                  Submit Registry
                </button>
              </form>

              {lastSubmission ? (
                <div className="mt-6 rounded border border-status-ok/30 bg-status-ok/10 p-4 text-center">
                  <p className="text-sm font-bold text-status-ok flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Registered: {lastSubmission.email}
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        )
      default:
        return <HomePage onOpenJoinModal={() => setIsJoinModalOpen(true)} />
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col relative z-10 transition-colors duration-300">
      {/* Top Navigation Bar */}
      <TopNavBar
        currentRoute={route}
        isDark={isDark}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        {renderContent()}
      </main>

      {/* Footer Area */}
      <Footer />

      {/* Access Form Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  )
}
