import { createContext, useState, useContext } from "react";
 
const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const login = (userName) => {
    // In a real application, you would handle authentication here
    setUser({ name: userName });
  };
 
  const logout = () => {
    setUser(null);
  };
 
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}