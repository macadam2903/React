import axios from "axios"
import { useEffect, useState } from "react"
import Orszagadat from "./components/Orszagadat"

function App() {
  const [countries, setCountries] = useState([])
  const backendUrl = "https://restcountries.com/v3.1/alpha/hu"
 
  useEffect(() => {
    const OrszagokBetoltese = async () => {
      try {
        const results = await axios.get(backendUrl)
        console.log(results.data)
        setCountries(results.data)
      } catch (error) {
        console.error("Hiba az adatok betöltésekor:", error)
      }
    }
    OrszagokBetoltese()
  }, [])
 
  return (
    <>
      <h1>Országadatok</h1>
      {countries.map((country, index) => (
        <Orszagadat
          key={index}
          name={country.name}
          currencies={country.currencies ? Object.values(country.currencies)[0] : {symbol: "N/A"}}
          capital={country.capital}
          borders={country.borders ? country.borders.join(", ") : "Nincs határos ország"}
          flag={country.flag}
          flags={country.flags}
          population={country.population}
          maps={country.maps}
          continents={country.continents}
          timezones={country.timezones}
          car={country.car}
          coatOfArms={country.coatOfArms}
        />
      ))}
    </>
  )
}
 
export default App