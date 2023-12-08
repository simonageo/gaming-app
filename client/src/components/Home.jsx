import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
  const [searchKeyword, setSearchKeyword]=useState('');

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/search?title=${searchKeyword}`)
  }

  return (
    <div className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="caption header-text">
              <h6>Welcome to LUGX</h6>
              <h2>BEST GAMING CATALOG EVER!</h2>
              <p>
                Explore a vast world of gaming adventures with our comprehensive
                game catalog web application.
              </p>
              <div className="search-input">
                <form id="search" onSubmit={onSearch}>
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    value={searchKeyword}
                    name="searchKeyword"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button role="button">Search Now</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="right-image">
              <img src="images/banner-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
