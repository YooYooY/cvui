import React, { useCallback } from 'react'
import useHashRouter from './router'
import './App.scss'
import Table from './components/Table/table'

function App() {
  const { push, route, module:Component, routes } = useHashRouter()
  
  const classes = useCallback(
    (r) => `nav-link ${route === r ? 'link-active' : ''}`,
    [route]
  )
    
  const nav = (
    <nav>
      <a className="home-link" onClick={() => push("")}>cv</a>
      {routes.map((r) => (
        <a key={r} onClick={() => push(r)} className={classes(r)}>
          {r}
        </a>
      ))}
    </nav>
  )
  
  if (!Component) return (
    <div className="home-nav">
      <h1>CVUI</h1>
      {nav}
    </div>
  )
  
  const { defaultProps } = Component
    
  return (
    <div className="App">
      {nav}
      <main>
        <h1>{route}</h1>
        <div className="container">
          {Component ? <Component /> : '404 Not Found'}
          {defaultProps && <Table data={defaultProps} />}
        </div>
      </main>
    </div>
  )
}

export default App
