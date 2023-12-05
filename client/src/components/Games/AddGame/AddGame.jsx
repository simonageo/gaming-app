import { Link } from "react-router-dom";
import styles from "../AddGame/AddGame.module.css";

export default function AddGame() {
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

          <form id="login-form">
            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="name" className={styles.labelAbove}>
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name..."
                  autoComplete="on"
                  required=""
                  className={styles.inputField}
                />
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="category" className={styles.labelAbove}>
                  Category:
                </label>
                <select
                  name="category"
                  id="category"
                  className={styles.inputField}
                >
                  <option value="adventure">Adventure</option>
                  <option value="strategy">Strategy</option>
                  <option value="racing">Racing</option>
                  {/* Add more options as needed */}
                </select>
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="difficultyLevel" className={styles.labelAbove}>
                  Difficulty Level:
                </label>
                <input
                  type="number"
                  name="difficultyLevel"
                  id="difficultyLevel"
                  placeholder="Difficulty Level..."
                  min="0"
                  className={styles.inputField}
                />
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
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="description" className={styles.labelAbove}>
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description..."
                  className={styles.inputField}
                />
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
