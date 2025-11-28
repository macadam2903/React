const Orszagadat = ({ name, currencies, capital, borders, flag, flags, population, maps, continents, timezones, car, coatOfArms }) => {
    return (
        <div className="orszagadat">
            <div className="orszag-fejlec">
                <img src={flags.svg} alt={flags.alt} className="zaszlo" />
                {coatOfArms.png && <img src={coatOfArms.png} alt="Címer" className="cimer" />}
                <h2>{flag} {name.common}</h2>
            </div>
            
            <div className="orszag-info">
                <p><strong>Fizetőeszköz:</strong> {currencies.symbol}</p>
                <p><strong>Főváros:</strong> {capital}</p>
                <p><strong>Népesség:</strong> {population.toLocaleString('hu-HU')} fő</p>
                <p><strong>Kontinens:</strong> {continents.join(", ")}</p>
                <p><strong>Időzóna:</strong> {timezones.join(", ")}</p>
                <p><strong>Közlekedés:</strong> {car.side === "right" ? "Jobboldali" : "Baloldali"} forgalom (Jelzés: {car.signs.join(", ")})</p>
                <p><strong>Határos országok:</strong> {borders}</p>
                <p><strong>Térképek:</strong> 
                    <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer"> Google Maps</a> | 
                    <a href={maps.openStreetMaps} target="_blank" rel="noopener noreferrer"> OpenStreetMap</a>
                </p>
            </div>
        </div>
    )
}
 
export default Orszagadat