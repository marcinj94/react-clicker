import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Clicker from './Clicker/Clicker';

class App extends Component {

  state = {
    result: 0,
  }

  handleAddPoint = () => {
    this.setState(prevState => ({
      result: prevState.result + 1,
    }))
  }

  handleSubtractPoint = () => {
    this.setState(prevState => ({
      result: prevState.result - 1,
    }))
  }

  handleClearResult = () => {
    this.setState(prevState => ({
      result: 0,
    }))
  }




  render() {
    return (
      <div className="Clicker">
        <Header />
        <Clicker
          result={this.state.result}
          plusHandle={this.handleAddPoint}
          minusHandle={this.handleSubtractPoint}
          refreshHandle={this.handleClearResult}
        />
      </div >
    );
  }
}

export default App;
