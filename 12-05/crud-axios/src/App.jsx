import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
 
function App() {
  const [data, setData] = useState([]);
 
  const url = 'https://retoolapi.dev/yEtUV8/data';
 
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
  const postData = async () => {
    const newData =
    {
      "Lakohely": "Gomba",
      "Munkakor": "Tanulo",
      "TeljesNev": "Kala Pál"
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
      getData(); // Refresh data after posting
    }
    catch (error) {
      console.error('Error posting data:', error);
    }
  }
 
  const deleteData = async (id) => {
 
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log('Data deleted successfully:', response.data);
      getData(); // Refresh data after postin
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }
 
  const updateData = async (id) => {
    const updatedData =
    {
      "Lakohely": "Budapest,Timföld utca 99",
      "Munkakor": "Tanulo",
      "TeljesNev": "Gebefüginébélánéistvánné Károly Évike"
    }
    try {
      const response = await axios.put(`${url}/${id}`, updatedData);
      console.log('Data updated successfully:', response.data);
      getData(); // Refresh data after posting
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }
 
  useEffect(() => {
    getData();
  }, []);
 
  return (
    <>
      <h1>CRUD with Axios</h1>
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={() => updateData(11)}>Update Data</button>
      <button onClick={() => deleteData(130)}>Delete Data</button>
    </>
  )
}
 
export default App