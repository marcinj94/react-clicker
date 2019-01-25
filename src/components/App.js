import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus, faSyncAlt);


class App extends Component {
  render() {
    return (
      <div className="Clicker">
        <Header />

        <div className="clicker">
          <div className="result">
            <span>0</span>
          </div>
          <div className="buttons">
            <button><FontAwesomeIcon icon="plus" /></button>
            <button><FontAwesomeIcon icon="minus" /></button>
            <button><FontAwesomeIcon icon="sync-alt" /></button>
          </div>
        </div>


        {/* <FontAwesomeIcon icon="plus" />
          <FontAwesomeIcon icon="minus" />

          <FontAwesomeIcon icon="sync-alt" /> */}
      </div >
    );
  }
}

export default App;
