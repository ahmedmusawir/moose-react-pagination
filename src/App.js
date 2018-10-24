import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';
// import SamplePagination from './containers/SamplePagination';
import Posts from './containers/Posts';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <div className="container mt-5">
            <Posts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
