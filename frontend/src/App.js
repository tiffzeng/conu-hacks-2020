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
    return (
      <div className="App">
        <header className="App-header">
          <p>ConuHacks 2020</p>
          <SearchBar passData={this.passData}/>
          <List items={this.state.data}/>
          <VideoPlayer url={this.state.url}/>
          <Footer/>
        </header>
      </div>
    );
  }
}

export default App


