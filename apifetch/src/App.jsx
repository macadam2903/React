import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API fetch useEffect-ben
  useEffect(() => {
    const controller = new AbortController();

    fetch('https://jsonplaceholder.typicode.com/users', { 
      signal: controller.signal 
    })
      .then(res => {
        if (!res.ok) throw new Error('Hiba a betöltés során');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    // Cleanup: fetch megszakítása unmount-kor
    return () => controller.abort();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Loading állapot
  if (loading) {
    return (
      <div className="loading-container">
        <h2>Betöltés...</h2>
      </div>
    );
  }

  // Error állapot
  if (error) {
    return (
      <div className="error-container">
        <h2>Hiba történt</h2>
        <p>{error}</p>
        <button onClick={handleRetry}>Újrapróbálkozás</button>
      </div>
    );
  }

  // Data állapot
  return (
    <>
      <h1>Felhasználók ({users.length} db)</h1>
      
      <button className="refresh-btn" onClick={handleRetry}>
        Frissítés
      </button>

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
  );
}

export default App;
