import './App.css';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import VideoPlayer from './Components/VideoPlayer';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();

    this.state={
      url:""
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>ConuHacks 2020</p>
          <SearchBar />
          <Footer/>
          <VideoPlayer url={this.state.url}/>
  
        </header>
      </div>
    );
  }
}


