'use client'

import { cn } from '@tiss/utils'
import { useFadeInScale, useNeonPulse } from '../../hooks/use-gsap-animation'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

type RankLevel = 'Void' | 'Cipher' | 'Packet' | 'Forge' | 'Breach' | 'Sentinel'

interface RankBadgeProps {
  rank?: RankLevel
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  animate?: boolean
  className?: string
}

const rankStyles: Record<RankLevel, { color: string; glow: string; description: string }> = {
  Void: {
    color: '#666666',
    glow: '0 0 20px rgba(102, 102, 102, 0.5)',
    description: 'Level 0 - Beginner',
  },
  Cipher: {
    color: '#00BFFF',
    glow: '0 0 20px rgba(0, 191, 255, 0.6)',
    description: 'Level 1 - Learning',
  },
  Packet: {
    color: '#00FF41',
    glow: '0 0 20px rgba(0, 255, 65, 0.6)',
    description: 'Level 2 - Intermediate',
  },
  Forge: {
    color: '#FFB800',
    glow: '0 0 20px rgba(255, 184, 0, 0.6)',
    description: 'Level 3 - Advanced',
  },
  Breach: {
    color: '#FF3333',
    glow: '0 0 20px rgba(255, 51, 51, 0.6)',
    description: 'Level 4 - Expert',
  },
  Sentinel: {
    color: '#9D00FF',
    glow: '0 0 20px rgba(157, 0, 255, 0.6)',
    description: 'Level 5 - Master',
  },
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
}

const iconSizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
}

export function RankBadge({
  rank = 'Void',
  size = 'md',
  showLabel = true,
  animate = true,
  className,
}: RankBadgeProps) {
  const badgeRef = useFadeInScale<HTMLDivElement>(0, 0.5)
  const style = rankStyles[rank]

  return (
    <div
      ref={animate ? badgeRef : undefined}
      className={cn('flex flex-col items-center gap-2', className)}
    >
      {/* Badge Circle */}
      <div
        className={cn(
          'relative flex items-center justify-center rounded-full',
          'border-2 transition-all duration-300',
          sizeClasses[size],
          'glass-card'
        )}
        style={{
          borderColor: style.color,
          boxShadow: style.glow,
        }}
        role="img"
        aria-label={`${rank} rank badge - ${style.description}`}
      >
        <ShieldCheckIcon
          className={cn(iconSizes[size], 'transition-all duration-300')}
          style={{ color: style.color }}
          aria-hidden="true"
        />

        {/* Rotating ring animation */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed animate-spin-slow opacity-30"
          style={{ borderColor: style.color }}
          aria-hidden="true"
        />
      </div>

      {/* Label */}
      {showLabel && (
        <div className="text-center space-y-1">
          <div
            className="text-lg font-bold terminal-text"
            style={{
              color: style.color,
              textShadow: `0 0 10px ${style.color}80`,
            }}
          >
            {rank}
          </div>
          <div className="text-xs text-[var(--muted)] terminal-text">{style.description}</div>
        </div>
      )}
    </div>
  )
}
