import './App.css'
import React, { useEffect, useState } from 'react';

//A https://randomuser.me/api/?results=10 végpontról jövő adatokból hozz létre személyenként egy kártyát. 
//Jelenítsd meg a képet, nevet és tedd lehetővé, hogy a kártya alján like és dislike gombok segítségével szavazni lehessen. 
//A like-ra kattintva eggyel nőjön a szavazat, dislike esetén csökkenjen a szavazat, amely jelenjen is meg az adott kártyán.


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setUsers(data.results));
  }, []);

  const handleVote = (index, type) => {
    const updatedUsers = [...users];
    if (type === 'like') {
      updatedUsers[index].votes = (updatedUsers[index].votes || 0) + 1;
    } else {
      updatedUsers[index].votes = (updatedUsers[index].votes || 0) - 1;
    }
    setUsers(updatedUsers);
  };

  return (
    <>
      {users.map((user, index) => (
        <div key={index} className="card">
          <img src={user.picture.large} alt={user.name.first} />
          <h3>{`${user.name.first} ${user.name.last}`}</h3>
          <p>Votes: {user.votes || 0}</p>
          <button onClick={() => handleVote(index, 'like')}>Like</button>
          <button onClick={() => handleVote(index, 'dislike')}>Dislike</button>
        </div>
      ))}
    </>
  );
}

export default App;