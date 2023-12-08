import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../Games/AddGame/AddGame.module.css";
import { useEffect, useState } from "react";
import { getOne } from "../../services/gameService.js";
import { edit } from "../../services/gameService";
import { gameValidator } from "../../validations/gameValidation";

export default function GameEdit() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [errors, setErrors] = useState({});
  const [game, setGame] = useState({
    title: "",
    category: "",
    difficultyLevel: "",
    imageUrl: "",
    description: "",
  });

  useEffect(() => {
    getOne(gameId)
      .then(setGame)
      .catch((err) => console.log(err));
  }, [gameId]);

  const editGameSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const errorsRetrieved = gameValidator(data);
    setErrors(errorsRetrieved);
    if (Object.keys(errorsRetrieved).length > 0) {
      setErrors(errorsRetrieved);
    } else {
      setErrors({});
      try {
        await edit(gameId, data);
        navigate("/games");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const onChange = (e) => {
    setGame((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="page-heading header-text">
            <h3>Edit Game</h3>
            <span className="breadcrumb">
              <Link to="/">Home</Link> &gt; Edit Game
            </span>
          </div>

          <form id="edit-game-form" onSubmit={editGameSubmit}>
            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="title" className={styles.labelAbove}>
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="on"
                  required=""
                  className={styles.inputField}
                  value={game.title}
                  onChange={onChange}
                />
                {errors.title && (
                  <p className={styles.errorText}>{errors.title}</p>
                )}
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="category" className={styles.labelAbove}>
                  Category:
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className={styles.inputField}
                  value={game.category}
                  onChange={onChange}
                />
                {errors.category && (
                  <p className={styles.errorText}>{errors.category}</p>
                )}
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="difficultyLevel" className={styles.labelAbove}>
                  Difficulty Level:
                </label>
                <input
                  type="text"
                  name="difficultyLevel"
                  id="difficultyLevel"
                  className={styles.inputField}
                  value={game.difficultyLevel}
                  onChange={onChange}
                />
                {errors.difficultyLevel && (
                  <p className={styles.errorText}>{errors.difficultyLevel}</p>
                )}
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="imageUrl" className={styles.labelAbove}>
                  Image URL:
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className={styles.inputField}
                  value={game.imageUrl}
                  onChange={onChange}
                />
                {errors.imageUrl && (
                  <p className={styles.errorText}>{errors.imageUrl}</p>
                )}
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="description" className={styles.labelAbove}>
                  Description:
                </label>
                <textarea
                  name="description"
                  id="description"
                  className={styles.inputField}
                  value={game.description}
                  onChange={onChange}
                />
                {errors.description && (
                  <p className={styles.errorText}>{errors.description}</p>
                )}
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <button
                  type="submit"
                  id="create-submit"
                  className={styles.submitButton}
                >
                  Edit
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
