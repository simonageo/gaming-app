import { useContext, useEffect } from "react";

import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logout();
        navigate("/");
      })
      .catch(() => {
        logout();
        navigate("/");
      });
  }, []);

  return null;
}
