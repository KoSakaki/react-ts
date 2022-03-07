import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

const P = styled.p `
color:red;
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <P>Hello Vite + React!</P>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <P>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </P>
      </header>
    </div>
  )
}

export default App
