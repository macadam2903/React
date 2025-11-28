import axios from 'axios';
import { useState, useEffect } from 'react';
import Felhasznalokartya from './components/Felhasznalokartya';
 
function App() {
  const [users, setUsers] = useState([])
  let backendUrl = "https://randomuser.me/api/?results=10";
 
  useEffect(() => {
    const FelhasznalokBetoltese = async () => {
      try {
        let results = await axios.get(backendUrl);
        console.log(results.data.results);
        setUsers(results.data.results);
      } catch (error) {
        console.error("Hiba a felhasználók betöltésekor:", error);
      }
    }
    FelhasznalokBetoltese();
  }, []);
 
  return (
    <>
      <h1>Felhasználók listája</h1>
      {users.map((user, index) => (
        <Felhasznalokartya
          key={index}
          name={user.name}
          email={user.email}
          picture={user.picture}
        />
      ))}
    </>
  );
}
 
export default App;