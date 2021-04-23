import { useEffect, useState } from 'react'

const useDebounceValue = (debounceValue: any, delay: number) => {
  const [value, setDeboundVal] = useState(() => debounceValue)

  useEffect(() => {
    let timer = setTimeout(() => {
      setDeboundVal(debounceValue)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [debounceValue, delay])

  return {
    value,
  }
}

export default useDebounceValue
