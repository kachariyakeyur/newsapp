import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import About from './Components/About'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
 

  render() {
    return (
      <Router>
        <Navbar/>
          <Routes>
     
        <Route exact path="/" element={<News />} />
   
        <Route exact path="/about" element={<About />} />
     
    </Routes>
      </Router>
    )
  }
}