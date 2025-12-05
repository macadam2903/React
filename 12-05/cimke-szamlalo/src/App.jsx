import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button className="counter-btn" onClick={() => {
        const newCount = count + 1;
        setCount(newCount);
        document.title = `${newCount}`;
      }}>
        Click me
      </button>
    </div>
  );
}
