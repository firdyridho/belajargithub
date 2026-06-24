
interface TopNavBarProps {
  currentRoute: string
  isDark: boolean
  onToggleTheme: () => void
  onOpenJoinModal: () => void
}

const navRoutes = [
  { path: "/about", label: "About" },
  { path: "#", label: "Academy" },
  { path: "#", label: "Blog" },
  { path: "/organigram", label: "Organigram" }
]

export function TopNavBar({
  currentRoute,
  isDark,
  onToggleTheme,
  onOpenJoinModal
}: TopNavBarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface-container-lowest/90 backdrop-blur">
      <div className="mx-auto flex max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <div className="flex items-center gap-6">
          {/* Brand Logo */}
          <a
            className="flex items-center font-display-lg text-h2 font-bold tracking-tighter text-on-surface"
            href="/"
          >
            <img
              alt="TISS Logo"
              className="mr-2 h-8 w-auto object-contain dark:brightness-200 dark:hue-rotate-180 dark:invert md:h-10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx578363Zl5U4-oxWjWINcMkrHp14ERhKoh_BAjBEhnX5bvOY9a0s89lgR6mqZxyNoqCpgCgd3YJB-KeDtnO5FpXScs7_HQ6pNz0ytIondyCf3Qqk1jOo4uiC4L2UQNgUzF3En8yK7puRMxqAX8HCakGWAOdNPxiXVdTq3hm47jWJ1qfIIzvIM_DhyBpbHA75ohRAF1QWObDt2NOxa3khfG1zGAVlX_s0Gp4Pe-PgidxRj2RMBYJyZpN00ODN2KYetKy6S8fgHdus"
            />
            TISS
          </a>

          {/* Navigation Links (Hidden on Mobile) */}
          <nav className="hidden items-center gap-4 md:flex">
            {navRoutes.map((item) => {
              const isActive = currentRoute === item.path
              return (
                <a
                  className={`rounded px-3 py-2 font-label-caps text-label-caps transition-all duration-200 ${
                    isActive
                      ? "bg-surface-container-high text-primary"
                      : "text-on-surface-variant hover:bg-surface-container-high hover:text-primary"
                  }`}
                  href={item.path}
                  key={item.label}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            aria-label="Toggle Theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200"
            onClick={onToggleTheme}
            type="button"
          >
            <span
              className="material-symbols-outlined"
              data-icon={isDark ? "light_mode" : "dark_mode"}
            >
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Join Button */}
          <button
            className="bg-primary text-on-primary font-label-caps text-label-caps px-4 py-2 rounded hover:bg-on-primary-fixed-variant transition-colors dark:shadow-[0_0_15px_rgba(30,111,217,0.3)] md:px-6"
            onClick={onOpenJoinModal}
            type="button"
          >
            Join Society
          </button>
        </div>
      </div>
    </header>
  )
}
