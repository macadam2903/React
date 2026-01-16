import { useAuth } from "../context/AuthContext";   
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login('vega', 'vega@husi.com', 'vegatarian');
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login as vega</button>
        </div>
    );
}
export default Login;