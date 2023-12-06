import { Link } from "react-router-dom";
import styles from "../Register/Register.module.css";
import AuthContext from "../../AuthContext";
import useForm from "../../hooks/useForm";
import { useContext } from "react";

export default function Register() {
  const { register } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(register, {
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="page-heading header-text">
            <h3>Register</h3>
            <span className="breadcrumb">
              <Link to="/">Home</Link> &gt; Register
            </span>
          </div>

          <form id="register-form" onSubmit={onSubmit}>
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
                  value={values.username}
                  onChange={onChange}
                  className={styles.inputField}
                />
              </fieldset>
            </div>
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
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <label htmlFor="rePassword" className={styles.labelAbove}>
                  Repeat Password:
                </label>
                <input
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Repeat Your Password..."
                  autoComplete="on"
                  required=""
                  value={values.rePassword}
                  onChange={onChange}
                  className={styles.inputField}
                />
              </fieldset>
            </div>

            <div className="col-lg-12">
              <fieldset className={styles.inputFieldContainer}>
                <button
                  type="submit"
                  id="register-submit"
                  className={styles.submitButton}
                >
                  Register
                </button>
              </fieldset>
              <fieldset className={styles.inputFieldContainer}>
                <div className="login-link">
                  <p>
                    If you already have an account,{" "}
                    <Link to="/login">login here</Link>.
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
