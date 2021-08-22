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

class App extends React.Component {
  constructor(props) {
    super(props);
    if (!Firebase.apps.length) {
      Firebase.initializeApp(config)
    }
    this.state = {
      developers: []
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

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let role = this.refs.role.value;
    let uid = this.refs.uid.value;

    if (uid && name && role) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].name = name;
      developers[devIndex].role = role;
      this.setState({ developers });
    } else if (name && role) {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, name, role });
      this.setState({ developers });
    }

    this.refs.name.value = "";
    this.refs.role.value = "";
    this.refs.uid.value = "";
  };

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.name.value = developer.name;
    this.refs.role.value = developer.role;
  };

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Firebase Development Team</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.role}</p>
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Add new team member here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Role</label>
                    <input
                      type="text"
                      ref="role"
                      className="form-control"
                      placeholder="Role"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h3>
                Tutorial{" "}
                <a href="https://www.educative.io/edpresso/firebase-as-simple-database-to-react-app">
                  here
                </a>
              </h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
            