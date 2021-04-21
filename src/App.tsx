import React, { useCallback } from 'react'
import useHashRouter from './router'
import './App.scss'
import Table from './components/Table/table'

function App() {
  const { push, route, module, routes } = useHashRouter()
  const classes = useCallback(
    (r) => `nav-link ${route === r ? 'link-active' : ''}`,
    [route]
  )

  const component = module.default()
  const { defaultProps } = module.default

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
          {component ? component : '404 Not Found'}
          {defaultProps && <Table data={defaultProps} />}
        </div>
      </main>
    </div>
  )
}

export default App
