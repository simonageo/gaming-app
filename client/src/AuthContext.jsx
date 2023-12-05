import { createContext, useState } from "react";
import * as authService from "./services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.accessToken
  );
  const [userId, setUserId] = useState("");

  const login = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      localStorage.setItem("accessToken", result.accessToken);
      setAuthenticated(true);
      setUserId(result._id);
      navigate("/");
    } catch (err) {
      setUserId("");
      navigate("/");
    }
  };

  const register = async (values) => {
    try {
      const result = await authService.register(values.email, values.password);
      localStorage.setItem("accessToken", result.accessToken);
      setAuthenticated(true);
      setUserId(result._id);
      navigate("/");
    } catch (err) {
      setUserId("");
      navigate("/");
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setAuthenticated(false);
      localStorage.removeItem("accessToken");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, register, logout, userId: userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
