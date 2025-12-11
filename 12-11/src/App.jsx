import './App.css'
import { useState, useEffect } from 'react'
import LoadData from './components/LoadData'
import KeresoPanel from './components/KeresoPanel'
import DataTable from './components/DataTable'
 
function App() {
  const [adatok, setAdatok] = useState([])
  const [filters, setFilters] = useState({
    id: '',
    nev: '',
    kor: '',
    belepesDatuma: ''
  })
  const [szurtAdatok, setSzurtAdatok] = useState(adatok)
 
  const szures = (e) => {
    e.preventDefault();
    let szurtAdatok = adatok.filter((adatsor) => {
      return (
        (filters.id === '' || adatsor.id === parseInt(filters.id)) &&
        (filters.nev === '' || adatsor.TeljesNev.toLowerCase().includes(filters.nev.toLowerCase())) &&
        (filters.kor === '' || adatsor.Eletkor === parseInt(filters.kor)) &&
        (filters.belepesDatuma === '' || new Date(adatsor.BelepesDatuma).toISOString().split('T')[0] === filters.belepesDatuma)
      );
    });
    setAdatok(szurtAdatok);
  }
  useEffect(() => {
    LoadData({ adatok, setAdatok })
  }, [])
 
  return (
    <>
      <h1>Keresés adatokban</h1>
      <form action="">
      <button onClick={szures}>Keresés</button>
        <table>
          <thead>
            <tr>
                <th>ID</th>
                <th>Név</th>
                <th>Kor</th>
                <th>Belépés dátuma</th>
            </tr>
            <KeresoPanel filters={filters} setFilters={setFilters}/>
          </thead>
          <DataTable adatok={adatok}/>
        </table>
      </form>
    </>
  )
}
 
export default App