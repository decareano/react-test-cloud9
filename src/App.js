import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import Form from './Form'
import './App.css';
import Table from './Table'



class App extends Component {
  render() {

    const characters = [
      {
      date: 'August 13, 2021',
      reading: "120-80",
      },
      {
        date: "August 14, 2021",
        reading: "125-83",
      },
      {
        date: "August 15, 2021",
        reading: "129-75",
      },
      {
        date: "August 16, 2021",
        reading: "126-75",
      },
      {
        date: "August 8, 2021",
        reading: "126-75",
      },
      {
        date: "August 7, 2021",
        reading: "126-75",
      },
    ]

    characters.sort((a, b) => {
      let da = new Date(a.date),
          db = new Date(b.date)
        return db - da
    })

   
    // characters.filter(character => character.date > "August 14, 2021")
    
    return (
      <div className="container">
        <Table marceloData={characters.filter(character => character.date >= "August 17, 2021")} />
        
      </div>
    )
  }
}

export default App
