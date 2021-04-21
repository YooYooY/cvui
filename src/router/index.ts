import { useState, useEffect, useMemo, useCallback } from 'react'

type ImportType = Record<
  string,
  { default: Function & { defaultProps: Record<string, any>[] } }
>

export type RouterReturnType = ReturnType<typeof useHashRouter>

const cache: ImportType = {}

function importAll(r: any) {
  r.keys().forEach((key: string) => {
    const name = key.toLowerCase().split('/')[1]
    cache[name] = r(key)
  })
}

importAll((require as any).context('../components', true, /example\.(tsx)$/))

const getHsah = () => window.location.hash.toLowerCase().replace('#/', '')

function useHashRouter() {
  const [route, setRoute] = useState(() => getHsah())
  const [routes] = useState(() => Object.keys(cache))

  const module = useMemo(() => {
    return cache[route]
  }, [route])

  const push = useCallback(
    (name: string) => (window.location.hash = '#/' + name),
    []
  )

  useEffect(() => {
    const hashChange = () => {
      let routeKey = getHsah()
      setRoute(routeKey)
    }
    window.addEventListener('hashchange', hashChange)
    return () => {
      window.removeEventListener('hashchange', hashChange)
    }
  }, [])

  return {
    route,
    module,
    routes,
    push,
  }
}

export default useHashRouter
