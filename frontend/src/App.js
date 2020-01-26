import './App.css';
import List from './Components/List'
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      url: ""
    };
    this.passData = this.passData.bind(this);
  }

  passData(data) {
    this.setState({data: data});
    console.log(this.state.data);
  }

  render() {

    const title = {
      fontSize: "20pt"
    };

    return (
      <div className="App">
        <header className="App-header">
          <p style={title}> ConuHacks 2020 </p>
          <SearchBar passData={this.passData}/>
          <br  />
          <List items={this.state.data}/>
          <VideoPlayer url={this.state.url}/>
          <Footer/>
        </header>
      </div>
    );
  }
}

export default App


