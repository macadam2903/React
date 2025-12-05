import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // Legyen lehetőség egy beviteli mező adatát elmenteni a localStorage-ba
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('savedInput');
    if (saved) {
      setInputValue(saved);
    }
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem('savedInput', inputValue);
  };

  return (
    <>
      <div className="container">
        <input 
          type="text" 
          value={inputValue}
          placeholder="Írj be valamit..."
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={saveToLocalStorage}>
          Mentés
        </button>
      </div>
    </>
  );
}

export default App;
