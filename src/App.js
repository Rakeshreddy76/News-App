import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div className='container my-3'>
        <Navbar/>
        <News/>
      </div>
    )
  }
}



