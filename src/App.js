import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Children from './Children.js'
// import ComplexList from './list.js'
// import Planets from './planets.js'
import { Container } from '@material-ui/core';
class App extends React.Component {
  
  render() {
    
    return (
      <Container maxWidth="lg">
        <Children />
      </Container>
    );
  }
}
export default App;
