import { useState } from 'react'
import './App.css'
import Counter from './features/counter/Counter'
import Controls from './features/counter/Controls'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter />
      <Controls />
    </div>
  )
}

export default App
