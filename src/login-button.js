import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (

    
  
    <form method="post">
      <div class="sidenav">
         <div class="login-main-text">
         <div style={{color: '#7a21ff'}} >
            <h1>Application Login Page</h1>
          </div> 
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"></input>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password"></input>
                  </div>
                  <button type="submit" class="btn btn-primary"
                  onClick={() => loginWithRedirect()}>Let me in</button>
                 
               </form>
            </div>
         </div>
      </div>
    
    
   
  

     
        {/* <button 
        type="submit" 
        class="btn btn-primary btn-block btn-large"
        onClick={() => loginWithRedirect()}>Let me in.</button> */}
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