'use client'

import { useEffect, useRef, RefObject } from 'react'
import gsap from 'gsap'

/**
 * Hook for GSAP animations with accessibility (respects prefers-reduced-motion)
 */
export function useGsapAnimation<T extends HTMLElement>(
  animation: (element: T, gsapInstance: typeof gsap) => gsap.core.Tween | gsap.core.Timeline | void,
  dependencies: any[] = []
): RefObject<T | null> {
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    if (!elementRef.current) return
    if (typeof window === 'undefined') return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // Skip animations if user prefers reduced motion
      return
    }

    const tween = animation(elementRef.current, gsap)
    
    return () => {
      if (tween && typeof tween === 'object' && 'kill' in tween) {
        tween.kill()
      }
    }
  }, dependencies)

  return elementRef
}

/**
 * Fade in from bottom animation
 */
export function useFadeInUp<T extends HTMLElement>(
  delay = 0,
  duration = 0.6
): RefObject<T | null> {
  return useGsapAnimation<T>((element, gsap) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
      }
    )
  }, [delay, duration])
}

/**
 * Fade in with scale animation
 */
export function useFadeInScale<T extends HTMLElement>(
  delay = 0,
  duration = 0.5
): RefObject<T | null> {
  return useGsapAnimation<T>((element, gsap) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: 'power2.out',
      }
    )
  }, [delay, duration])
}

/**
 * Slide in from left animation
 */
export function useSlideInLeft<T extends HTMLElement>(
  delay = 0,
  duration = 0.6
): RefObject<T | null> {
  return useGsapAnimation<T>((element, gsap) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: 'power3.out',
      }
    )
  }, [delay, duration])
}

/**
 * Staggered children animation
 */
export function useStaggerAnimation<T extends HTMLElement>(
  childSelector: string,
  stagger = 0.1,
  delay = 0
): RefObject<T | null> {
  return useGsapAnimation<T>((element, gsap) => {
    const children = element.querySelectorAll(childSelector)
    
    return gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay,
        stagger,
        ease: 'power2.out',
      }
    )
  }, [childSelector, stagger, delay])
}

/**
 * Neon glow pulse animation (continuous)
 */
export function useNeonPulse<T extends HTMLElement>(
  color = '0, 255, 65'
): RefObject<T | null> {
  return useGsapAnimation<T>((element, gsap) => {
    return gsap.to(element, {
      textShadow: `0 0 10px rgba(${color}, 0.7), 0 0 20px rgba(${color}, 0.5), 0 0 30px rgba(${color}, 0.3)`,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    })
  }, [color])
}

/**
 * Glitch effect animation (triggered)
 */
export function createGlitchEffect(element: HTMLElement) {
  const timeline = gsap.timeline()
  
  timeline
    .to(element, {
      x: -2,
      skewX: -2,
      duration: 0.05,
    })
    .to(element, {
      x: 2,
      skewX: 2,
      duration: 0.05,
    })
    .to(element, {
      x: -1,
      skewX: -1,
      duration: 0.05,
    })
    .to(element, {
      x: 0,
      skewX: 0,
      duration: 0.05,
    })
  
  return timeline
}
