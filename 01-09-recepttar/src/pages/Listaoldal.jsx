import { NavLink } from 'react-router-dom';
import { receptek } from '../data/receptek';

const Listaoldal = () => {
    return (
        <div>
            <h1>Receptlista</h1>
            <div className="row">
                {receptek.map(recept => (
                    <div key={recept.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{recept.nev}</h5>
                                <p><span className="badge bg-secondary">{recept.kateg}</span></p>
                                <br />
                                <NavLink 
                                    to={`/receptek/${recept.id}`} 
                                    className="btn btn-primary"
                                >
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
export default Listaoldal;