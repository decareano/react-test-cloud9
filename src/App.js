import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
//import logo from './logo.svg';
import './App.css';
import Table from './Table'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Table />
        <LoginButton />
        <LogoutButton />
      </div>
    )
  }
}



export default App