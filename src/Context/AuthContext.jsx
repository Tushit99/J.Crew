import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [Auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  const Login = () => {
    setAuth(true);
    if (state.from) {
      navigate(state.from, { replace: true });
    } else {
      navigate("/");
    }
  };
  const Logout = () => {
    setAuth(false);
    navigate("/"); 
  };

  return (
    <AuthContext.Provider value={{ Auth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
