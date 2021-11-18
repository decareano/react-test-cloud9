import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    // <div className="container" style={{marginBottom: "5px", marginTop: "5px"}}>
      
    <button
      className="btn btn-primary btn-block"
     
      onClick={() => logout({ returnTo: "http://localhost:3000/login" })}
      
    >
      Log Out
    </button>
    // </div>
  )
};

export default LogoutButton