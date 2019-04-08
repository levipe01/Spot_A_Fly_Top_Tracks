import React, { Component } from 'react';
import fetch from 'node-fetch';
import PopularList from './PopularList.jsx';
import '../style.scss';
import AudioPlayer from './AudioPlayer.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tracks: []
    };
  }

  componentDidMount() {
    this.getTopTracks();
  }

  getTopTracks() {
    fetch('http://localhost:3003/data/toptracks')
      .then(results => results.json())
      .then((tracks) => {
        this.setState({ tracks });
      })
      .catch(console.log);
  }

  render() {
    const { tracks } = this.state;
    if (!tracks) return null;
   
    return (
      <div id="main" data-testid="popular-main">
        <div id="left" />
        <div id="content">
          <h1 id="header">Popular</h1>
          <PopularList data-testid="popular-list" tracks={tracks} />
        </div>
        <AudioPlayer />
      </div>
    );
  }
}

export default App;
