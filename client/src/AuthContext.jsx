import { createContext, useState } from "react";
import * as authService from "./services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    isAuthenticated: !!localStorage.accessToken,
    userId: "",
  });

  const login = async (values) => {
      const result = await authService.login(values.email, values.password);
      localStorage.setItem("accessToken", result.accessToken);
      setValues({
        username: result.username,
        isAuthenticated: true,
        userId: result._id,
      });
      navigate("/");
  };
  
  const register = async (values) => {
    try {
      const result = await authService.register(
        values.username,
        values.email,
        values.password
      );
      localStorage.setItem("accessToken", result.accessToken);
      setValues({
        username: result.username,
        isAuthenticated: true,
        userId: result._id,
      });
      navigate("/");
    } catch (err) {
      setValues((prevValues) => ({
        ...prevValues,
        userId: "",
      }));
      navigate("/");
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("accessToken");
      setValues({
        username: "",
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
        username: values.username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
