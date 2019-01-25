import React, { Component } from 'react';
import Header from './Header/Header';
import Clicker from './Clicker/Clicker';
import TotalClicks from './TotalClicks/TotalClicks'

class App extends Component {

  state = {
    result: 0,
    totalClick: 0,
  }

  handleAddPoint = () => {
    this.setState(prevState => ({
      result: prevState.result + 1,
      totalClick: prevState.totalClick + 1,
    }))
  }

  handleSubtractPoint = () => {
    this.setState(prevState => ({
      result: prevState.result - 1,
      totalClick: prevState.totalClick + 1,
    }))
  }

  handleClearResult = () => {
    this.setState(prevState => ({
      result: 0,
      totalClick: prevState.totalClick + 1,
    }))
  }




  render() {

    const allClicks = this.state.totalClick > 0 ? <TotalClicks totalClick={this.state.totalClick} /> : null;

    return (
      <>
        <Header />
        <Clicker
          result={this.state.result}
          plusHandle={this.handleAddPoint}
          minusHandle={this.handleSubtractPoint}
          refreshHandle={this.handleClearResult}
        />
        {allClicks}
      </>
    );
  }
}

export default App;
