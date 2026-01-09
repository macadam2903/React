import { useNavigate } from 'react-router-dom';

const Fooldal = () => {
    const navigate = useNavigate();
    
    return (
        <div className="fooldal-container">
            <h2>Üdvözlünk a Recepttárban!</h2>
            <p>
                Fedezd fel a világ legfinomabb receptjeit különböző kategóriákban.
            </p>
            <button 
                className="btn btn-primary btn-lg"
                onClick={() => navigate('/receptek')}
            >
                Böngészd a recepteket →
            </button>
        </div>
    );
}

export default Fooldal;