import './App.css'
import React, { useEffect, useState } from 'react';


const cardStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: '20px',
};

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
    <div style={cardStyle}>
      {users.map((user, index) => (
        <div key={index} className="card">
          <img src={user.picture.large} alt={user.name.first} />
          <h3>{`${user.name.first} ${user.name.last}`}</h3>
          <p>Votes: {user.votes || 0}</p>
          <button onClick={() => handleVote(index, 'like')}>Like</button>
          <button onClick={() => handleVote(index, 'dislike')}>Dislike</button>
        </div>
      ))}
    </div>
  );
}

export default App;