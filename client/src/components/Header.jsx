import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/" className="logo">
                <img src="images/logo.png" style={{ width: 158 }} />
              </Link>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/games">Games</Link>
                </li>
                {/* <li>
                  <Link to="product-details.html">Product Details</Link>
                </li> */}
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </ul>
              <Link className="menu-trigger">
                <span>Menu</span>
              </Link>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
