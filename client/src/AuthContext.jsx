import { createContext, useState } from "react";
import * as authService from "./services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    isAuthenticated: !!localStorage.accessToken,
    userId: "",
  });

  const login = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
      localStorage.setItem("accessToken", result.accessToken);
      setValues({
        email: result.email,
        isAuthenticated: true,
        userId: result._id,
      });
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
      setValues({
        email: result.email,
        isAuthenticated: true,
        userId: result._id,
      });
      navigate("/");
    } catch (err) {
      setUserId("");
      navigate("/");
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("accessToken");
      setValues({
        email: "",
        isAuthenticated: false,
        userId: "",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: values.isAuthenticated,
        login,
        register,
        logout,
        userId: values.userId,
        email: values.email,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
