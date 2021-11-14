import React from 'react'
import Firebase from "firebase";
import config from "./config";
import Form from "./Form"
import Table from './Table'

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import Splashout from './splashout';
import ProtectedRoute from "./protected-route";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import  Loading  from "./loading";
import { withAuth0 } from "@auth0/auth0-react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AuthenticationButton from './authentication-button';

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

  handleSubmit = (character) => {
    // deleted the spread operator...will I be able to print values????
    this.setState({ characters: [...this.state.characters, character] })
  }

  removeCharacter = (removeId) =>  {
    //resolved in class
    const { characters } = this.state;
    console.log(removeId)
    this.setState({
      characters: characters.filter((character) => {
        return character.id !== removeId;
      })
    })
    
  }

  

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
            <Route path="/login">
              {/* <AuthenticationButton /> */}
              <LoginButton />
              
            </Route>
            <Route path="/splashout">
              <Splashout />
            </Route>
            <Route path="/">
              <LogoutButton />
              
              <Form handleSubmit={this.handleSubmit} />
              <Table marceloData={characters.sort((a, b) => {

                  let da = new Date(a.date),
                  db = new Date(b.date)
                  //console.log(da)
                  //console.log(db)
                  return db - da
              })}  removeCharacter={this.removeCharacter} />
            </Route>
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
