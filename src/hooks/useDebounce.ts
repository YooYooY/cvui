import { useEffect, useState, useRef } from 'react'

type callbackFn<T> = (debValue: T) => void

const useDebounce = <T = string>(
  debounceValue: T,
  delay: number,
  cb?: callbackFn<T>
) => {
  const [value, setDeboundVal] = useState<T>(() => debounceValue)
  const callbackFn = useRef<callbackFn<T>>()

  useEffect(() => {
    let timer = setTimeout(() => {
      callbackFn.current = cb
      setDeboundVal(debounceValue)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [debounceValue, delay, cb])

  useEffect(() => {
    callbackFn.current && callbackFn.current(value)
  }, [value, callbackFn])

  return value
}

export default useDebounce
