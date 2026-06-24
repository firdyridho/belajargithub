'use client'

import { cn } from '@tiss/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useSlideInLeft, useStaggerAnimation } from '../../hooks/use-gsap-animation'
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  AcademicCapIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

interface SidebarProps {
  className?: string
}

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
    description: 'Overview & Progress',
  },
  {
    name: 'Curriculum',
    href: '/curriculum',
    icon: BookOpenIcon,
    description: '24-Week Journey',
  },
  {
    name: 'Assignments',
    href: '/assignments',
    icon: ClipboardDocumentListIcon,
    description: 'Submit Your Work',
  },
  {
    name: 'Quiz',
    href: '/quiz',
    icon: AcademicCapIcon,
    description: 'Test Your Skills',
  },
  {
    name: 'Leaderboard',
    href: '/leaderboard',
    icon: TrophyIcon,
    description: 'Rankings & Scores',
  },
]

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const sidebarRef = useSlideInLeft<HTMLElement>(0, 0.6)
  const navItemsRef = useStaggerAnimation<HTMLUListElement>('li', 0.08, 0.3)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 rounded-lg bg-[var(--surface-base)] border border-[var(--surface-border)] text-[var(--foreground)] hover:border-[var(--color-primary)] transition-all duration-200"
        aria-label="Open navigation menu"
      >
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <nav
        ref={sidebarRef}
        className={cn(
          'flex flex-col w-64 bg-[var(--surface-base)] border-r border-[var(--surface-border)] h-full overflow-y-auto',
          // Desktop: always visible
          'hidden lg:flex',
          // Mobile: slide in from left
          isMobileMenuOpen && 'fixed inset-y-0 left-0 z-50 flex',
          className
        )}
        aria-label="Main navigation"
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-elevated)] transition-all duration-200"
          aria-label="Close navigation menu"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Logo / Branding */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-[var(--surface-border)]">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
            <span className="text-black font-bold text-xl terminal-text">T</span>
          </div>
          <div>
            <h1 className="text-lg font-bold neon-text-primary">TISS Academy</h1>
            <p className="text-xs text-[var(--muted)] terminal-text">Null Protocol</p>
          </div>
        </div>

        {/* Navigation Items */}
        <ul ref={navItemsRef} className="flex-1 px-3 py-4 space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            const Icon = item.icon

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group cursor-pointer',
                    'hover:bg-[var(--surface-elevated)] hover:translate-x-1',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                    isActive
                      ? 'bg-[var(--surface-elevated)] border-l-2 border-[var(--color-primary)] text-[var(--color-primary)]'
                      : 'text-[var(--color-text)]'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon
                    className={cn(
                      'w-5 h-5 transition-all duration-200',
                      isActive
                        ? 'text-[var(--color-primary)] drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]'
                        : 'text-[var(--muted)] group-hover:text-[var(--color-primary)]'
                    )}
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <div
                      className={cn(
                        'text-sm font-semibold transition-colors',
                        isActive ? 'text-[var(--color-primary)]' : 'group-hover:text-[var(--foreground)]'
                      )}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs text-[var(--muted)] terminal-text">{item.description}</div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Footer Info */}
        <div className="px-6 py-4 border-t border-[var(--surface-border)]">
          <div className="text-xs text-[var(--muted)] space-y-1">
            <p className="terminal-text">v1.0.0-beta</p>
            <p className="text-[10px]">© 2026 TISS Untirta</p>
          </div>
        </div>
      </nav>
    </>
  )
}

