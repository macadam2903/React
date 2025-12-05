import './App.css'
import { useState, useEffect, useRef } from 'react'

// Külső "running" változó a Start/Stop-hoz
let running = true

function App() {
  const [count, setCount] = useState(0)
  const startStopBtnRef = useRef(null)
  
  const [inputValue, setInputValue] = useState('')
  
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const savedCount = localStorage.getItem("count")
    if (savedCount !== null) {
      setCount(Number(savedCount))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setCount(prev => prev + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const btn = startStopBtnRef.current

    const handleClick = () => {
      running = !running
      btn.textContent = running ? "Stop" : "Start"
    }

    btn.addEventListener("click", handleClick)

    return () => btn.removeEventListener("click", handleClick)
  }, [])

  useEffect(() => {
    const savedInput = localStorage.getItem("inputValue")
    if (savedInput !== null) {
      setInputValue(savedInput)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("inputValue", inputValue)
  }, [inputValue])

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/users', { 
      signal: controller.signal 
    })
      .then(res => {
        if (!res.ok) throw new Error('Hiba a betöltés során')
        return res.json()
      })
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  const handleRetry = () => {
    setLoading(true)
    setError(null)
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }

  return (
    <>
      
      <section className="timer-section">
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
      </section>

      <hr />

     
      <section className="input-section">
        <h2>Input figyelés és mentés</h2>
        
        <div className="input-container">
          <label htmlFor="watched-input">Írd be a szöveget:</label>
          <input
            id="watched-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="saving..."
          />
        </div>

        <button 
          className="reset" 
          onClick={() => setInputValue('')}
        >
          Input törlése
        </button>

        {inputValue && (
          <p className="saved-text">Mentett szöveg: <strong>{inputValue}</strong></p>
        )}
      </section>

      <hr />

     
      <section className="api-section">
        <h2>API Fetch - Felhasználók</h2>

        {loading && (
          <div className="loading-container">
            <h3>Betöltés...</h3>
          </div>
        )}

        {error && (
          <div className="error-container">
            <h3>Hiba történt</h3>
            <p>{error}</p>
            <button onClick={handleRetry}>Újrapróbálkozás</button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="api-header">
              <p>Összesen: {users.length} felhasználó</p>
              <button className="refresh-btn" onClick={handleRetry}>
                Frissítés
              </button>
            </div>

            <div className="users-grid">
              {users.map(user => (
                <div key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Telefon:</strong> {user.phone}</p>
                  <p><strong>Város:</strong> {user.address.city}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  )
}

export default App

