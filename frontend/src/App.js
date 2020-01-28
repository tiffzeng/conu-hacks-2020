import './App.css';
import List from './Components/List';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import { getSong } from './api/Search';
import React from 'react';
import ReactPlayer from 'react-player';
import ReactHowler from 'react-howler';
import ClipLoader from 'react-spinners/ClipLoader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideList: false,
      hideSearchBar: false,
      playing: false,
      isLoading: false,
      urls: [],
      id: '',
      data: [],
      videoUrl: '', //"https://ak4.picdn.net/shutterstock/videos/32074804/thumb/stock-footage-large-container-ship-at-sea-top-down-aerial.mp4",
      imageUrl: '' //'https://image.shutterstock.com/display_pic_with_logo/2723875/755022088/stock-photo-aerial-view-to-ocean-waves-blue-water-background-755022088.jpg'
    };
    this.passData = this.passData.bind(this);
    this.getID = this.getID.bind(this);
    this.displayVideo = this.displayVideo.bind(this);
  }

  passData(data) {
    this.setState({
      data: data,
      hideSearchBar: true,
      hideList: false
    });
    console.log(this.state.data);
  }

  async getID(id) {
    this.setState({
      isLoading: true
    });
    //get song info
    const response = await getSong(id);
    this.setState({
      id: id,
      urls: response.data,
      isLoading: false,
      hideList: true
    });

    this.displayVideo(this.state.urls);
    console.log(this.state.urls[this.state.urls.length - 1]);
  }

  displayVideo(urls) {
    for (let i = 0; i < this.state.urls.length - 2; i++) {
      setTimeout(
        function() {
          this.setState({
            videoUrl: urls[i]['link'],
            playing: true
          });
        }.bind(this),
        i * this.state.urls[0].duration * 600
      );
    }
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
          {!this.state.hideSearchBar && <SearchBar passData={this.passData} />}
          <br />
          {this.state.isLoading && (
            <ClipLoader
              sizeUnit={'px'}
              size={50}
              loading={this.state.isLoading}
              color={'white'}
            />
          )}
          {!this.state.hideList && !this.state.isLoading && this.displayList()}
          {this.state.urls.length > 0 && (
            <ReactHowler
              src={this.state.urls[this.state.urls.length - 1]}
              playing={true}
            />
          )}
          {this.state.videoUrl.indexOf('mp4') !== -1 ||
          this.state.videoUrl === '' ? (
            <ReactPlayer url={this.state.videoUrl} playing={this.state.playing} />
          ) : (
            <img src={this.state.url} alt="new" width="640" height="360" />
          )}
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
