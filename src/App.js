import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import Form from './Form'
import './App.css';
import Table from './Table'



class App extends Component {
  state = {
    characters: [],
  }


removeChar = (index) => {
  const {characters} = this.state
  
  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    })
  })
}

handleSubmit = (character) => {
  this.setState({characters: [...this.state.characters, character]})
}

render() {
  const {characters} = this.state
  return (
    <div className="container">
      <Table charData={characters} removeChar={this.removeChar} />
      <Form handleSubmit={this.handleSubmit} />
    </div>
  )
}
}

export default App