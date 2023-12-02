import { createContext, useState } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.accessToken
  );
  const login = async (values) => {
    const result = await authService.login(values.email, values.password);
    localStorage.setItem("accessToken", result.accessToken);
    setAuthenticated(true);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
