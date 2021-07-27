import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
import Table from './Table'



class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspiring actress',
      },
       {
        name: 'Dennis',
        job: 'Bartender'
      }
      
      ],
    
  }


removeChar = (index) => {
  const {characters} = this.state
  
  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    })
  })
}

render() {
  const {characters} = this.state
  return (
    <div className="container">
      <Table charData={characters} removeChar={this.removeChar} />
    </div>
  )
}
}

export default App