import React from 'react';
import './src/api/Seach.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { song: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ song: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.song}
          onChange={this.handleChange}
          placeholder="Search a song"
        />

        <br />

        <button> Search </button>
      </div>
    );
  }
}

export default SearchBar;
