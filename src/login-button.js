import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (

  
  
    <form method="post">
     
        <button 
        type="submit" 
        class="btn btn-primary btn-block btn-large"
        onClick={() => loginWithRedirect()}>Let me in.</button>
    </form>




    // <button
    //   className="btn btn-primary btn-block"
    //   onClick={() => loginWithRedirect()}
    //   // add more html button to make it more visually appealing
    // >
    //   Log In
    // </button>
  )
};


// class LoginButton extends React.Component {
//     render() {
//         const { loginWithRedirect } = this.props.withAuth0
//     return (
//         <button
//       className="btn btn-primary btn-block"
//       onClick={() => loginWithRedirect()}
//     >
//       Log In
//     </button>
//   );
//     }
// }

export default LoginButton