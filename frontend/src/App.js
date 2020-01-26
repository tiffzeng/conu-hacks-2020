import './App.css';
import List from './Components/List';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
import { getSong } from './api/Search';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      data: [],
      videoUrl:
        'https://ak4.picdn.net/shutterstock/videos/32074804/thumb/stock-footage-large-container-ship-at-sea-top-down-aerial.mp4',
      imageUrl: '' //'https://image.shutterstock.com/display_pic_with_logo/2723875/755022088/stock-photo-aerial-view-to-ocean-waves-blue-water-background-755022088.jpg'
    };
    this.passData = this.passData.bind(this);
    this.getID = this.getID.bind(this);
  }

  passData(data) {
    this.setState({ data: data });
    console.log(this.state.data);
  }

  async getID(id) {
    this.setState({ id: id });
    //get song info
    const response = await getSong(id);
    console.log(response);
  }

  displayVideo() {
    return (
      <div>
        {this.state.videoUrl ? (
          <VideoPlayer url={this.state.videoUrl} />
        ) : (
          this.state.imageUrl && (
            <img src={this.state.imageUrl} alt="new" width="640" height="360" />
          )
        )}
      </div>
    );
  }

  displayList() {
    return (
      <List items={this.state.data} passData={this.passData} getID={this.getID} />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2> ConU Hacks V 2020 </h2>
          <SearchBar passData={this.passData} />

          <br />
          {this.state.id ? this.displayVideo() : this.displayList()}
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
