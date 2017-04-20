import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var PEOPLEABI = [ { constant: true,
    inputs: [],
    name: 'getPeople',
    outputs: [ [Object], [Object], [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'addPerson',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'people',
    outputs: [ [Object], [Object], [Object] ],
    payable: false,
    type: 'function' } ]

var PEOPLEADDRESS = '0xfe867f29ac98c6d0b4c0ddd1f8293324743f713e'

class App extends Component {

  ComponentWillMount() {
    console.log(ETHEREUM_CLIENT)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
