import React, { Component} from 'react';

class Gif extends Component {
  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200.webp?cid=3640f6095c0ff72335527a3967664eda`
    return(
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
