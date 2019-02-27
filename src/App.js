import React, { Component } from 'react';
import { Header } from './components/Header';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
       <Wrapper />
      </div>
    );
  }
}

export default App;
