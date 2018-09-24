import React, { Component } from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar'
import Banner from './components/banner/Banner'
import About from './components/about/About'
import Services from './components/services/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Banner />
        <About />
        <Services />
      </div>
    );
  }
}

export default App;
