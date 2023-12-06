import { Link } from "react-router-dom";
import styles from "../Login/Login.module.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required.";
    }

    if (!values.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const { values, onChange, onSubmit, errors } = useForm(login, {
    email: "",
    password: "",
  }, validate);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="page-heading header-text">
            <h3>Login</h3>
            <span className="breadcrumb">
              <Link to="/">Home</Link> &gt; Login
            </span>
          </div>

          <form id="login-form" onSubmit={onSubmit}>
            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="email" className={styles.labelAbove}>
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email..."
                  autoComplete="on"
                  required=""
                  value={values.email}
                  onChange={onChange}
                  className={styles.inputField}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
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
                  value={values.password}
                  onChange={onChange}
                  className={styles.inputField}
                />
                {errors.password && (
                  <p className={styles.errorText}>{errors.password}</p>
                )}
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <button
                  type="submit"
                  id="login-submit"
                  className={styles.submitButton}
                >
                  Login
                </button>
              </fieldset>
              <fieldset className={styles.inputFieldContainer}>
                <div className="register-link">
                  <p>
                    If you do not have an account,{" "}
                    <Link to="/register">register here</Link>.
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
