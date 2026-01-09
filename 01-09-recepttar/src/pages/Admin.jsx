import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const Admin = () => {
    //const [bejelentkezve] = useState(false); 
    
    //if (!bejelentkezve) {
  //      return <Navigate to="/" replace />;
  //  }
    
    return (
        <div>
            <h1>Admin oldal</h1>
            <p>Védett tartalom</p>
        </div>
    );
}
export default Admin;