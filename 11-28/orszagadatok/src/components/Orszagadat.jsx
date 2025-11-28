const Orszagadat = ({ name, currencies, capital, borders }) => {
    return (
        <div className="orszagadat">
            <h2><strong>Ország:</strong> {name.common}</h2>
            <p><strong>Fizetőeszköz:</strong> {currencies.symbol}</p>
            <p><strong>Főváros:</strong> {capital}</p>
            <p><strong>Határos országok:</strong> {borders}</p>
        </div>
    )
}
 
export default Orszagadat