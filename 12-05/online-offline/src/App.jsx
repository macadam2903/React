import { useEffect, useState } from 'react';
import './App.css';

function App() {
//Készíts egy alkalmazást, amelynek a közepén megjelenik, hogy az oldal online vagy offline

  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <div className="status-container">
      <h1 className={online ? 'online' : 'offline'}>
        {online ? 'ONLINE' : 'OFFLINE'}
      </h1>
    </div>
  );
}

export default App;
