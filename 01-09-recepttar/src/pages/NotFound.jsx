const NotFound = () => {
    return (
        <div className="error-page">
            <h1 className="display-1">404</h1>
            <h2>Az oldal nem található</h2>
            <p>Sajnos a keresett oldal nem létezik.</p>
            <a href="/" className="btn btn-danger mt-4">
                Vissza a főoldalra
            </a>
        </div>
    );
}

export default NotFound;