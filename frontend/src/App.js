import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ConuHacks 2020</p>
        <SearchBar />
        <Footer/>

      </header>
    </div>
  );
}

export default App;
