'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@tiss/utils'
import { useFadeInScale } from '../../hooks/use-gsap-animation'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
  animate?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      animate = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const animateRef = useFadeInScale<HTMLButtonElement>(0, 0.4)

    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

    const variants = {
      primary:
        'bg-[var(--color-cta)] text-white hover:opacity-90 hover:shadow-[var(--shadow-neon-danger)] focus-visible:ring-[var(--color-cta)] active:scale-95',
      secondary:
        'bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black hover:shadow-[var(--shadow-neon-primary)] focus-visible:ring-[var(--color-primary)] active:scale-95',
      ghost:
        'bg-transparent text-[var(--color-text)] hover:bg-[var(--surface-elevated)] hover:text-[var(--color-primary)] focus-visible:ring-[var(--color-primary)] active:scale-95',
      danger:
        'bg-[var(--color-cta)] text-white hover:opacity-90 hover:shadow-[var(--shadow-neon-danger)] focus-visible:ring-[var(--color-cta)] active:scale-95',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    const widthClass = fullWidth ? 'w-full' : ''

    return (
      <button
        ref={animate ? animateRef : ref}
        className={cn(baseStyles, variants[variant], sizes[size], widthClass, className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="sr-only">Loading...</span>
            Loading
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
