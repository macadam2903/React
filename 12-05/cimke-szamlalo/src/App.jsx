import { useState } from 'react';
import './App.css';


export default function App() {
const [count, setCount] = useState(0);


return (
<div className="container">
<button className="counter-btn" onClick={() => setCount(count + 1)}>
{count}
</button>
</div>
);
}