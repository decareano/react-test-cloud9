import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import Form from './Form'
import './App.css';
import Table from './Table'
import Firebase from 'firebase'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // we are gonna update the data through the form
      characters: []
    }
  }

  removeCharacter = (index) => {
    
    const {characters} = this.state
    this.setState({
      //setState simply updates and re-renders UI
      //it needs to be like below..character can be anything
      //and it returns the one you choose to delete.
      // index in the parameter can be anything
      characters: characters.filter((character, i) => {
          
          return i !== index
        })
        
        
      })
    
  }
  
  render() {

    let {characters} = this.state


    characters.sort((a, b) => {
      let da = new Date(a.date),
          db = new Date(b.date)
        return db - da
    })

   
    // characters.filter(character => character.date > "August 14, 2021")
    
    return (
      
      <div className="container">
        
        {/* <Table marceloData={characters.filter(character => character.date <= "August 16, 2021")} /> */}
        <Table marceloData={characters} getUserData={this.getUserData} />
        <Form />
      </div>
     
    )
  }
}

export default App
