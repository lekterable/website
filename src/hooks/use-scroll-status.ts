import { useEffect, useState } from 'react'

const useScrollStatus = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [direction, setDirection] = useState<'down' | 'up'>('down')
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const newDirection = currentScrollY > lastScrollY ? 'down' : 'up'

      setIsScrolling(currentScrollY !== lastScrollY)
      setDirection(window.scrollY > lastScrollY ? 'down' : 'up')
      setLastScrollY(window.scrollY)

      if (newDirection !== direction) {
        setScrollDistance(0) // Reset scroll distance on direction change
      } else {
        setScrollDistance(
          (prevDistance) =>
            prevDistance + Math.abs(currentScrollY - lastScrollY),
        )
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [direction, lastScrollY])

  return {
    direction,
    isScrolling,
    isScrollingDown: direction === 'down',
    isScrollingUp: direction === 'up',
    scrollDistance,
  }
}

export default useScrollStatus
