import './App.css';
import List from './Components/List';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
import {getSong} from './api/Search';
import React from 'react';
import ReactPlayer from 'react-player';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      isLoading: false,
      urls: [],
      id: "",
      data: [],
      videoUrl: "",//"https://ak4.picdn.net/shutterstock/videos/32074804/thumb/stock-footage-large-container-ship-at-sea-top-down-aerial.mp4",
      imageUrl:
        ""//'https://image.shutterstock.com/display_pic_with_logo/2723875/755022088/stock-photo-aerial-view-to-ocean-waves-blue-water-background-755022088.jpg'
    };
    this.passData = this.passData.bind(this);
    this.getID = this.getID.bind(this);
    this.displayVideo = this.displayVideo.bind(this);
  }

  passData(data) {
    this.setState({ data: data });
    console.log(this.state.data);
  }


  async getID(id){
    this.setState({
      isLoading: true
    })
    //get song info
    const response = await getSong(id);
    this.setState({
      id: id,
      urls: response.data,
      isLoading: false
    })

    this.displayVideo(this.state.urls);
    console.log(this.state.urls);
  }

  
  displayVideo(urls) {
    for (let i=0; i<this.state.urls.length-2; i++) {
      setTimeout( function (){
        this.setState({
          videoUrl: urls[i]['link'],
          playing: true
        });
      }.bind(this), i*4000 );
  }
  }
  

  displayList(){
    return(
      <List items={this.state.data}
            passData={this.passData}
            getID={this.getID}
      />
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h2> ConU Hacks V 2020 </h2>
          <SearchBar passData={this.passData} />

          <br />
          {this.state.isLoading && <div>Loading</div>}
          {!this.state.id && this.displayList()}
          {(this.state.videoUrl.indexOf("mp4") !==-1 || this.state.videoUrl == "") ? <ReactPlayer url={this.state.videoUrl} playing={this.state.playing}/> : <img src={this.state.url} alt="new" width="640" height="360"/>}
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
