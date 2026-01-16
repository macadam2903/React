import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children  }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    
    const login = (username, email, role) => {
        setUser({ name: username, email: email, role: role });
        navigate('/kosar');
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}