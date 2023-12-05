import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return null;
}
