// import React, { Component } from 'react'
// //import ReactDOM from 'react-dom'
// //import logo from './logo.svg';
// import config from './config'
// import Form from './Form'
// import './App.css';
// import Table from './Table'
// import firebase from 'firebase'


// class App extends Component {
//   constructor(props) {
//     super(props)
//     if (!firebase.apps.length) {
//       firebase.initializeApp(config);
//    }else {
//       firebase.app(); // if already initialized, use that one
//    }
    
//     this.state = {
//       // we are gonna update the data through the form
//       characters: []
//     }
    
//   }

//   removeCharacter = (index) => {
    
//     const {characters} = this.state
//     this.setState({
//       //setState simply updates and re-renders UI
//       //it needs to be like below..character can be anything
//       //and it returns the one you choose to delete.
//       // index in the parameter can be anything
//       characters: characters.filter((character, i) => {
          
//           return i !== index
//         })
//       })
//   }
//   getUserData = () => {
//     let ref = firebase.database().ref("/");
//     ref.on("value", snapshot => {
//       const state = snapshot.val();
//       this.setState(state);
//     });
//     console.log('Data retrieved')
//   };


//   componentDidMount() {
//     this.getUserData()
//   }

//   componentWillUnmount() {
//     this.getUserData()
//   }

//   writeUserData = () => {
//     firebase.database()
//       .ref("/")
//       .set(this.state);
//     console.log("DATA SAVED");
//   }
  

  
//   handleSubmit = (character) => {
//     this.setState({characters: [...this.state.characters, character]})
//   }
  
//   render() {

//     let {characters} = this.state


//     characters.sort((a, b) => {
//       let da = new Date(a.date),
//           db = new Date(b.date)
//         return db - da
//     })

   
//     // characters.filter(character => character.date > "August 14, 2021")
    
//     return (
      
//       <div className="container">
        
//         {/* <Table marceloData={characters.filter(character => character.date <= "August 16, 2021")} /> */}
//         <Table marceloData={characters} removeCharacter={this.removeCharacter} />
//         <Form handleSubmit={this.handleSubmit} />
//       </div>
     
//     )
//   }
// }

// export default App

import React from 'react'
import Firebase from "firebase";
import config from "./config";
import Form from "./Form"
import Table from './Table'

import LoginButton from './login-button';
import LogoutButton from './logout-button';

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
    this.setState({characters: [...this.state.characters, character]})
  } 

  removeCharacter = (index) => {
        const {characters} = this.state
        
        this.setState({
            characters: characters.filter((character, i) => {
                return  i !== index
            })
        })
    }

  

  
  render() {
    const  { characters } = this.state;
    
    return (
          
            <div className="container">
              <LoginButton />
              
              <LogoutButton /> 
              <Form handleSubmit={this.handleSubmit} />
              {/* <Table marceloData={characters.filter(character => character.date <= "August 16, 2021")} /> */}
              
              <Table marceloData={characters.sort((a, b) => {
               
                    let da = new Date(a.date),
                    db = new Date(b.date)
                    return db - da
                    })
                    //need to be able to code the removeCharacter method here for the deletions to take place
              }/> 
            </div>
          )}
  }


export default App
            