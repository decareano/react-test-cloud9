import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
import Table from './Table'


class App extends Component {
  render() {
    const characters = [
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
      },
      
      ]
    return (
      <div className="container">
        <Table charData = { characters }  />    
       
      </div>
    )
  }
}



export default App