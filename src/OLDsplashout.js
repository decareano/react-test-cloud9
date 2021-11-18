import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const Splashout = () => {
  const { logout } = useAuth0()

  return (
    // <div className="container">
    <button
    className="btn btn-primary btn-block"
    onClick={() => logout()}
    //   // grab paper and pencil and visualize what I want the page to look like 
    //   // html code
     
    >
       Good Bye
     </button> 
    // <h1 class="font-semibold text-center" style="font-size:52px">You Have Been Logged Out</h1>
    // </div>
  )
};

export default Splashout