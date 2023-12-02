import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Header() {
  const {isAuthenticated}=useContext(AuthContext)
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src="images/logo.png" style={{ width: 158 }} />
              </Link>
              <ul className="nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/games">Games</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                {isAuthenticated && (
                  <>
                    <li>
                      <Link to="/game/create">Create Game</Link>
                    </li>
                    <li>
                      <Link to="/logout" className="user">Logout</Link>
                    </li>
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <li>
                      <Link to="/login" className="user">Login</Link>
                    </li>
                    <li>
                      <Link to="/register" className="user">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
