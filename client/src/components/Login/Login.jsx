import { Link } from "react-router-dom";
import styles from "../Login/Login.module.css";

export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="page-heading header-text">
            <h3>Log In</h3>
            <span className="breadcrumb">
              <Link to="/">Home</Link> &gt; Log In
            </span>
          </div>

          <form id="login-form" action="#" method="post">
            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="username" className={styles.labelAbove}>
                  Username:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Your Username..."
                  autoComplete="on"
                  required=""
                  className={styles.inputField}
                />
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="password" className={styles.labelAbove}>
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password..."
                  autoComplete="on"
                  required=""
                  className={styles.inputField}
                />
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <button
                  type="submit"
                  id="login-submit"
                  className={styles.submitButton}
                >
                  Log In
                </button>
              </fieldset>
              <fieldset className={styles.inputFieldContainer}>
                <div className="register-link">
                  <p>
                    If you do not have an account,{" "}
                    <Link href="/register">register here</Link>.
                  </p>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
