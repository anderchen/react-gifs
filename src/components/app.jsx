import React, { Component } from 'react';
// import giphy from 'giphy-api';
// const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

import SearchBar from './searchbar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
