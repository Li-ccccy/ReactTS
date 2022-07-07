import React from 'react'
import logo from './logo.svg'
import './App.css'
import { css } from '@emotion/css'
function App() {
  return (
    <div className="App">
      <div
        className={css({
          fontSize: '40px',
          background: '#000',
          color: '#fff',
        })}
      >
        你好👋，我在测试 🚀
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
