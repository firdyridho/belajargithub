'use client'

import { cn } from '@tiss/utils'
import { useFadeInUp } from '../../hooks/use-gsap-animation'
import { BellIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Button } from '../atoms/button'

interface TopBarProps {
  className?: string
  userName?: string
  userRank?: string
}

export function TopBar({ className, userName = 'Kader', userRank = 'Void' }: TopBarProps) {
  const topBarRef = useFadeInUp<HTMLElement>(0.2, 0.5)

  return (
    <header
      ref={topBarRef}
      className={cn(
        'flex items-center justify-between px-6 py-4 bg-[var(--surface-base)] border-b border-[var(--surface-border)]',
        className
      )}
    >
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <label htmlFor="global-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <MagnifyingGlassIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)]"
            aria-hidden="true"
          />
          <input
            id="global-search"
            type="search"
            placeholder="Search curriculum, assignments..."
            className={cn(
              'w-full pl-10 pr-4 py-2.5 rounded-lg',
              'bg-[var(--surface-elevated)] border border-[var(--surface-border)]',
              'text-[var(--foreground)] placeholder-[var(--muted)]',
              'transition-all duration-200',
              'focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-30',
              'hover:border-[var(--muted)]'
            )}
          />
        </div>
      </div>

      {/* Right Section: Notifications & User */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notifications */}
        <button
          type="button"
          className={cn(
            'relative p-2 rounded-lg transition-all duration-200 cursor-pointer',
            'text-[var(--muted)] hover:text-[var(--color-primary)] hover:bg-[var(--surface-elevated)]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-black'
          )}
          aria-label="Notifications"
        >
          <BellIcon className="w-6 h-6" aria-hidden="true" />
          {/* Notification badge */}
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-cta)] rounded-full ring-2 ring-[var(--surface-base)]"
            aria-label="You have new notifications"
          />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-[var(--surface-border)]">
          <div className="text-right">
            <div className="text-sm font-semibold text-[var(--foreground)]">{userName}</div>
            <div className="text-xs text-[var(--muted)] terminal-text">Rank: {userRank}</div>
          </div>
          <button
            type="button"
            className={cn(
              'relative rounded-full transition-all duration-200 cursor-pointer',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-black'
            )}
            aria-label="User menu"
          >
            <UserCircleIcon
              className="w-10 h-10 text-[var(--color-primary)] hover:text-[var(--color-primary)] hover:drop-shadow-[0_0_12px_rgba(0,255,65,0.7)] transition-all duration-200"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
