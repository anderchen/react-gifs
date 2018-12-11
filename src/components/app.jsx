import React, { Component } from 'react';
// import giphy from 'giphy-api';
// const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "yYSSBtDgbbRzq"
    }
  }

  search = (query) => {

  }

  render() {
     const gifs =[
        { id: "yYSSBtDgbbRzq"}
     ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
