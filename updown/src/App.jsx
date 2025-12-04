import './App.css'
import { useState, useEffect} from 'react'
function App() {
const [count, setCount] = useState (0)
useEffect (() => {
  const handleUpClick = () => setCount ((prevCount) => prevCount + 1)
  const handleDownClick = () => setCount ((prevCount) => (prevCount > 0 ? prevCount - 1 :0))
  const upButton = document.querySelector ('.up')
  const downButton = document.querySelector ('.down')
  upButton.addEventListener ('click', handleUpClick)
  downButton.addEventListener ('click', handleDownClick)
  return () => {
    upButton.removeEventListener ('click', handleUpClick)
    downButton.removeEventListener ('click', handleDownClick)
  }
} , [])
  return (

    <>
    <h1>Egyszerű Számláló</h1>
    <div id="kezelopanel">
    <button className='up'>+</button>
    <p>{count}</p>
    <button className='down'>-</button>
    </div>
    </>
  )
}

export default App
