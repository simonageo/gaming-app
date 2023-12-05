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
          <ul className="trending-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".adv">
                Adventure
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".str">
                Strategy
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".rac">
                Racing
              </a>
            </li>
          </ul>
          <div className="row trending-box">
            {games.map((game) => (
              <GameItem key={game._id} {...game} />
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="#"> &lt; </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a className="is_active" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#"> &gt; </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
