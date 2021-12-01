import React from 'react'
import Firebase from "firebase";
import config from "./config";


import LoginButton from './login-button';
import LogoutButton from './logout-button';
//import Splashout from './splashout';
import ProtectedRoute from "./protected-route";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import  Loading  from "./loading";
import { withAuth0 } from "@auth0/auth0-react";
import MainApp from './main-app';
import AuthenticationButton from './authentication-button';
import BloodOxygen from './blood_oxygen'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


class App extends React.Component {
  constructor(props) {
    super(props);
    
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config)
    }
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  // handleSubmit = (character) => {
  //   // deleted the spread operator...will I be able to print values????
  //   this.setState({ characters: [...this.state.characters, character] })
  // }

  // removeCharacter = (removeId) =>  {
  //   //resolved in class
  //   const { characters } = this.state;
  //   console.log(removeId)
  //   this.setState({
  //     characters: characters.filter((character) => {
  //       return character.id !== removeId;
  //     })
  //   })
    
  // }


  render() {
    const { characters } = this.state;
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        
            
     
        <Router>
        
          {/* class tomorrow: after splashout I can go back to localhost:3000.... to be resolved in next class */}
          <Switch>

            <Route path="/blood_oxygen">
                <BloodOxygen />
            </Route>
              
            <Route path="/login">
              {/* <AuthenticationButton /> */}
              <LoginButton />
            </Route>
           
            <Route path="/" >
              <MainApp />
            </Route>

            <Route path="#blood_oxygen" >
              <BloodOxygen  />
            </Route>

            {/* //Soetji class: I would like to add a new page/route called Blood_Oxygen somewhere here */}
          </Switch>
        </Router>
      </
      >
    )
  }
}

export default withAuth0(App, {
  onRedirecting: () => <Loading />,
});
