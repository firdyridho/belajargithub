import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  to: number
  from?: number
  duration?: number // in seconds
  delay?: number // in seconds
  className?: string
  startOnVisible?: boolean
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = '',
  startOnVisible = true
}: CountUpProps) {
  const [count, setCount] = useState(from)
  const elementRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(!startOnVisible)

  useEffect(() => {
    if (!startOnVisible || !elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [startOnVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrameId: number

    const run = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      // Quadratic deceleration easing (easeOutQuad)
      const easeProgress = progress * (2 - progress)
      
      const currentCount = Math.floor(from + (to - from) * easeProgress)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(run)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(run)
    }, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, from, to, duration, delay])

  return (
    <span ref={elementRef} className={className}>
      {count}
    </span>
  )
}
