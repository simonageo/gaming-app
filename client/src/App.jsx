import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/Contact";
import Games from "./components/Games/AllGames";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./AuthContext";
import Logout from "./components/Logout";
import AuthGuard from "./AuthGuard";
import AddGame from "./components/Games/AddGame/AddGame";
import GameDetails from "./components/Games/GameDetails/GameDetails";
import GameEdit from "./components/Games/GameEdit";
import Search from "./components/Search/Search";

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
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="/search" element={<Search />} />
          <Route element={<AuthGuard />}>
            <Route path="/game/create" element={<AddGame />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/games/:gameId/edit" element={<GameEdit />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
