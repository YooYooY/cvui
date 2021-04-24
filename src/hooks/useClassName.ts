import { useMemo } from 'react'

const useClassName = (
  ...args: Array<
    string | undefined | Record<string, any>
  >
) => {
  return useMemo(() => {
    return args
      .filter(Boolean)
      .map((classname) => {
        if (typeof classname === 'string') return classname
        const classes = []
        for (const [key, value] of Object.entries(classname!)) {
          value && classes.push(key)
        }
        return classes.join(' ')
      })
      .join(' ')
  }, [args])
}

export default useClassName
