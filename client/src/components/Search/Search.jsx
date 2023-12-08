import { Link, useLocation } from "react-router-dom";
import { getOneByTitle } from "../../services/gameService";
import { useEffect, useState } from "react";
import GameItem from "../Games/GameItem/GameItem";

export default function Search() {
  const [games, setGames] = useState([]);
  const location = useLocation();
  const searchKeyword = new URLSearchParams(location.search).get("title");

  useEffect(() => {
    getOneByTitle(searchKeyword)
      .then((result) => setGames(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Search</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Search
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section trending">
        <div className="container">
          {games.length > 0 ? (
            <div className="row trending-box">
              {games.map((game) => (
                <div key={game._id} className="col-lg-4 mb-4">
                  <GameItem {...game} />
                </div>
              ))}
            </div>
          ) : (
            <h3 className="col-lg-12">No matches found.</h3>
          )}
        </div>
      </div>
    </>
  );
}
