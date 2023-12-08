import { Link, useNavigate } from "react-router-dom";
import styles from "../AddGame/AddGame.module.css";
import { createGame } from "../../../services/gameService";
import { gameValidator } from "../../../validations/gameValidation.js";
import { useState } from "react";

export default function AddGame() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const createGameHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const errorsRetrieved = gameValidator(data);
    setErrors(errorsRetrieved);
    if (Object.keys(errorsRetrieved).length > 0) {
      setErrors(errorsRetrieved);
    } else {
      setErrors({})
      try {
        await createGame(data);
        navigate("/games");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="page-heading header-text">
            <h3>Create Game</h3>
            <span className="breadcrumb">
              <Link to="/">Home</Link> &gt; Create Game
            </span>
          </div>

          <form id="create-game-form" onSubmit={createGameHandler} >
            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="title" className={styles.labelAbove}>
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title..."
                  autoComplete="on"
                  required=""
                  className={styles.inputField}
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
                  placeholder="Category..."
                  className={styles.inputField}
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
                  placeholder="Difficulty Level..."
                  min="1"
                  className={styles.inputField}
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
                  placeholder="Image URL..."
                  className={styles.inputField}
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
                  placeholder="Description..."
                  className={styles.inputField}
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
                  Create
                </button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
