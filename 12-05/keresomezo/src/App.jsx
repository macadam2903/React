import { useState } from 'react';
import './App.css';

function App() {
//Készíts egy olyan alkalmazást, amelyben a letárolt adatokat a kereső mező tartalma alapján szűrni lehet

  const items = ["alma", "banán", "körte", "narancs", "szilva"];

  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <input 
        type="text"
        placeholder="Keresés..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
