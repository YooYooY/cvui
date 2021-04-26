import { useEffect, useState } from 'react'

export const useKeyEvent = (key: number) => {
  const [hasClick, setHasClick] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === key) {
        setHasClick(true)
      }
    }
    const handleKeyUp = () => {
      setHasClick(false)
    }
    document.addEventListener('keydown', handleKeyDown, false)
    document.addEventListener('keyup', handleKeyUp, false)

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false)
      document.removeEventListener('keyup', handleKeyUp, false)
    }
  }, [key])

  return hasClick
}
