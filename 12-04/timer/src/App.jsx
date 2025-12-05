import './App.css'
import { useState, useEffect, useRef } from 'react'

// Külső "running" változó a Start/Stop-hoz
let running = true

function App() {
  const [count, setCount] = useState(0)
  const startStopBtnRef = useRef(null)

//localstorage betöltés 
  useEffect(() => {
    const savedCount = localStorage.getItem("count")
    if (savedCount !== null) {
      setCount(Number(savedCount))
    }
  }, [])

//localstorage mentés
  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])


//timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setCount(prev => prev + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])


//startstop gomb
  useEffect(() => {
    const btn = startStopBtnRef.current

    const handleClick = () => {
      running = !running
      btn.textContent = running ? "Stop" : "Start"
    }

    btn.addEventListener("click", handleClick)

    return () => btn.removeEventListener("click", handleClick)
  }, [])



  return (
    <>
      <h1>Számláló timerrel</h1>


      <div id="inputpanel">
        <label></label>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>


      <button
        ref={startStopBtnRef}
        className="startstop"
      >
        Stop
      </button>


      <div id="resetpanel">
        <button className='reset' onClick={() => setCount(0)}>
          Alaphelyzet
        </button>
      </div>
    </>
  )
}

export default App
