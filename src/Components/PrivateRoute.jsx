import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { Auth } = useContext(AuthContext);

  if (Auth == false) {
    <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute; 
