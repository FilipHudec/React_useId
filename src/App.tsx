import { ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputNumber from './components/InputNumber'
import DisplayNumber from './components/DisplayNumber'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const display: Array<ReactNode> = []
 if(count > 200) {
  return <p>Big number</p>
  }
  if(count === 99) display.push(<p>Almost there</p>)
  return (
    <>
      
      <InputNumber label="Count" defaultValue={count} onChange={setCount} />
      {count < 50 ? <DisplayNumber value={count} /> : <h1>Count is too high</h1>}   
      {count < 50 ? <DisplayNumber value={count} /> : null}
      {count >= 50 && <DisplayNumber value={count} />}
      {display}
    </>
  )
}

export default App
