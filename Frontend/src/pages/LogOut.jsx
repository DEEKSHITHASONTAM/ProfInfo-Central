import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import './logout.css';
//import User_req_data from "./User_req";

function LogOut({ onLogout }) {
  useEffect(() => {
    onLogout();
  }, [onLogout]);

  // Redirect to SignIn page
  return <Navigate to="/" />;
}

export default LogOut;