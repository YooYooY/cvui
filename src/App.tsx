import React, { useCallback } from 'react'
import useHashRouter from './router'
import "./App.scss"

function App() {
  const { push, route, component, routes } = useHashRouter()

  const classes = useCallback(
    (r) => `nav-link ${route === r ? 'link-active' : ''}`,
    [route]
  )

  return (
    <div className="App">
      <nav>
        {routes.map((r) => (
          <a key={r} onClick={() => push(r)} className={classes(r)}>
            {r}
          </a>
        ))}
      </nav>
      <main>
        <h1>{route}</h1>
        <div className="container">
          {component ? component.default() : '404 Not Found'}
        </div>
      </main>
    </div>
  )
}

export default App
