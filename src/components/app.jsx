import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'yYSSBtDgbbRzq'
    }
  }

  search = (query) => {
    giphy({GIPHY_API_KEY}).search({
        q: query,
        rating: 'g',

    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
