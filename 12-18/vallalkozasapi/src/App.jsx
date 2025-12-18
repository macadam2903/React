import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
 
function App() {
  const [data, setData] = useState([])
 
  const url = 'https://retoolapi.dev/WCTMk4/data'
 
 
  const getData = async () => {
    console.log('getData lefutott');
 
    try {
      const response = await axios.get(url);
      console.log('Válasz:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
 
  const postData = async () => {
    const newData =
    {
      "Toke": 877878446,
      "Aktiv": true,
      "Szekhely": "Budapest",
      "Megnevezes": "Uj cég",
    }
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
    };
 
    try {
      const response = await axios.post(`${url}`, newData, config);
      console.log('Dataupdated successfully:', response.data);
      getData();
    }
    catch (error) {
      console.error('Error posting data:', error);
    }
  }
 
  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      console.log('Data deleted successfully');
      getData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
 
  const updateData = async (id) => {
    const updatedData = {
      "Toke": 999999999,
      "Aktiv": false,
      "Szekhely": "Debrecen",
      "Megnevezes": "Frissitett cég",
    };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
    };
 
    try {
      const response = await axios.put(`${url}/${id}`, updatedData, config);
      console.log('Data updated successfully:', response.data);
      getData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
 
  return (
    <>
      <h1>React gyakorló</h1>
      <button onClick={getData}>Adat lekérése</button>
      <button onClick={postData}>Adat létrehozása</button>
      <button onClick={() => updateData(10)}>Adat frissítése</button>
      <button onClick={() => deleteData(42)}>Adat törlése</button>        
    </>
  )
}
 
export default App