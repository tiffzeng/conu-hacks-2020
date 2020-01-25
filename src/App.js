import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ConuHacks 2020</p>
        <ReactPlayer
          url="https://ak4.picdn.net/shutterstock/videos/32074804/thumb/stock-footage-large-container-ship-at-sea-top-down-aerial.mp4"
          playing
        />
      </header>
    </div>
  );
}

export default App;
