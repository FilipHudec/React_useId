import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputNumber from './components/InputNumber'
import DisplayNumber from './components/DisplayNumber'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 if(count % 2 === 0) {
  return <p>Odd number</p>
  }
  return (
    <>
      
      <InputNumber label="Count" defaultValue={count} onChange={setCount} />
      {count < 50 ? <DisplayNumber value={count} /> : <h1>Count is too high</h1>}   
      {count < 50 ? <DisplayNumber value={count} /> : null}
      {count >= 50 && <DisplayNumber value={count} />}
    </>
  )
}

export default App
