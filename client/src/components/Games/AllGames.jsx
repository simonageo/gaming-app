import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import GameItem from "./GameItem/GameItem";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService
      .getAll()
      .then((result) => setGames(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Games</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; Games
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section trending">
        <div className="container">
        <div className="row trending-box">
        {games.map((game) => (
          <div key={game._id} className="col-lg-4 mb-4">
            <GameItem {...game} />
          </div>
        ))}
      </div>
        </div>
      </div>
    </>
  );
}
