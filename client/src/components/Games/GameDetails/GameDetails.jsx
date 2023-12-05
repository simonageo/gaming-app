import { Link, useParams } from "react-router-dom";
import { getOne } from "../../../services/gameService.js";
import { useEffect, useState } from "react";
import styles from './GameDetails.module.css'

export default function GameDetails() {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  useEffect(() => {
    getOne(gameId)
      .then(setGame)
      .catch((err) => console.log(err));
  }, [gameId]);

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Contact Us</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; {game.title}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text">
                <img src={game.imageUrl} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12">
                    <h1>{game.title}</h1>
                    <p>Category: {game.category}</p>
                    <p>Difficulty Level: {game.difficultyLevel}</p>
                    <p>Description: {game.description}</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="col-lg-12">
                      <fieldset>
                        <button id="edit" className={styles.button}>
                          Edit
                        </button>
                        <button id="delete" className={styles.button}>
                          Delete
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}