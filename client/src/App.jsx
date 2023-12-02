import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/Contact";
import Games from "./components/Games/AllGames";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./components/AuthContext";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
