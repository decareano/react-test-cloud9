import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const Splashout = () => {
  const { logout } = useAuth0()

  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => logout()}
      
    >
      Good Bye
    </button>
  )
};

export default Splashout