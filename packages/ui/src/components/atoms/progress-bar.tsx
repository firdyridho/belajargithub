'use client'

import { cn } from '@tiss/utils'
import { useEffect, useRef } from 'react'
import { useFadeInUp } from '../../hooks/use-gsap-animation'
import gsap from 'gsap'

interface ProgressBarProps {
  progress?: number // 0-100
  totalWeeks?: number
  currentWeek?: number
  showLabel?: boolean
  animate?: boolean
  className?: string
}

export function ProgressBar({
  progress = 0,
  totalWeeks = 24,
  currentWeek = 1,
  showLabel = true,
  animate = true,
  className,
}: ProgressBarProps) {
  const containerRef = useFadeInUp<HTMLDivElement>(0.1, 0.6)
  const progressRef = useRef<HTMLDivElement>(null)
  const percentageRef = useRef<HTMLSpanElement>(null)

  // Animate progress fill
  useEffect(() => {
    if (!animate || !progressRef.current || !percentageRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }
      if (percentageRef.current) {
        percentageRef.current.textContent = `${Math.round(progress)}%`
      }
      return
    }

    // Animate width
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.3,
    })

    // Animate percentage counter
    gsap.to(
      { value: 0 },
      {
        value: progress,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.3,
        onUpdate: function () {
          if (percentageRef.current) {
            percentageRef.current.textContent = `${Math.round(this.targets()[0].value)}%`
          }
        },
      }
    )
  }, [progress, animate])

  const clampedProgress = Math.max(0, Math.min(100, progress))

  return (
    <div ref={containerRef} className={cn('space-y-3', className)}>
      {/* Header */}
      {showLabel && (
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">Curriculum Progress</h3>
            <p className="text-xs text-[var(--muted)] terminal-text mt-0.5">
              Week {currentWeek} of {totalWeeks} • Null Protocol
            </p>
          </div>
          <span
            ref={percentageRef}
            className="text-2xl font-bold neon-text-primary terminal-text"
            aria-live="polite"
          >
            0%
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div
        className="relative h-3 bg-[var(--surface-elevated)] rounded-full overflow-hidden border border-[var(--surface-border)]"
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Curriculum progress: ${Math.round(clampedProgress)}%`}
      >
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, var(--color-primary) 0px, transparent 1px, transparent 10px, var(--color-primary) 11px)',
          }}
          aria-hidden="true"
        />

        {/* Progress fill */}
        <div
          ref={progressRef}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--color-primary)] to-[#00CC33] rounded-full transition-all"
          style={{
            width: '0%',
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3)',
          }}
        >
          {/* Shimmer effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Week markers (optional) */}
      {showLabel && totalWeeks > 0 && (
        <div className="flex justify-between text-xs text-[var(--muted)] terminal-text">
          <span>Week 1</span>
          <span>Week {Math.floor(totalWeeks / 2)}</span>
          <span>Week {totalWeeks}</span>
        </div>
      )}
    </div>
  )
}
