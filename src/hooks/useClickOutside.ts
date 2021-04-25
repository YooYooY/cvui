import { RefObject, useEffect } from 'react'

const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback?: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return
      }
      callback && callback(event)
    }

    document.addEventListener('click', listener, false)

    return () => {
      document.removeEventListener('click', listener, false)
    }
  }, [ref, callback])
}

export default useClickOutside
