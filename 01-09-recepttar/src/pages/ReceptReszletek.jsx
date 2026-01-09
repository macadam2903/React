import { useParams, useNavigate } from 'react-router-dom';
import { receptek } from '../data/receptek';

const ReceptReszletek = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recept = receptek.find(r => r.id === id);

    if (!recept) {
        return <div>Recept nem található!</div>;
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>{recept.nev}</h2>
                <p><span className="badge bg-info">{recept.kateg}</span></p>
                <br />
                <p>{recept.leiras}</p>
                <br />
                <button 
                    className="btn btn-secondary" 
                    onClick={() => navigate('/receptek')}
                >
                    ← Vissza a listához
                </button>
            </div>
        </div>
    );
}
export default ReceptReszletek;