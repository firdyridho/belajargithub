import React, { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  direction = 'up'
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getDirectionStyle = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0'
    
    let transformClass = ''
    switch (direction) {
      case 'up':
        transformClass = 'translate-y-8'
        break
      case 'down':
        transformClass = '-translate-y-8'
        break
      case 'left':
        transformClass = 'translate-x-8'
        break
      case 'right':
        transformClass = '-translate-x-8'
        break
      default:
        transformClass = ''
    }
    return `opacity-0 ${transformClass}`
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getDirectionStyle()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}
