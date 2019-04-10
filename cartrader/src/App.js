import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Listings from "./components/Listings/listings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Listings />
      </div>
    );
  }
}

export default App;
