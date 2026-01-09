import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Main = () => {
    return (
        <main className="container mt-3">
            <Navbar />
            <Outlet />
        </main>
    );
}

export default Main;