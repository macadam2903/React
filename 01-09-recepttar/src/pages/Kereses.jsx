import { useSearchParams, NavLink } from 'react-router-dom';
import { receptek } from '../data/receptek';

const Kereses = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const nev = searchParams.get('nev') || '';

    const szurtReceptek = receptek.filter(recept => 
        recept.nev.toLowerCase().includes(nev.toLowerCase())
    );

    return (
        <div>
            <h1>Recept keresése</h1>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Keresés név alapján..."
                value={nev}
                onChange={(e) => setSearchParams({ nev: e.target.value })}
            />
            
            <div className="row">
                {szurtReceptek.map(recept => (
                    <div key={recept.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5>{recept.nev}</h5>
                                <NavLink to={`/receptek/${recept.id}`}>
                                    Részletek
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Kereses;