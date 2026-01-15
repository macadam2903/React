import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
 
const Main = () => {
  const { user } = useAuth();
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {user ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Home />} />
          </>
        ) : (
          <>
            <Route
              path="/profile"
              element={<h1>Please log in to view your profile</h1>}
            />
            <Route path="/login" element={<Home />} />
          </>
        )}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </main>
  );
};
 
export default Main;