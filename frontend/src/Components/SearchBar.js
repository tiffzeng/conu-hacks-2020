import React from 'react';
import {getSongs} from '../api/Search'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {song: ''};
        this.handleChange = this.handleChange.bind(this);
        this.getSong = this.getSong.bind(this);
    }

    handleChange(e) {
        this.setState({song: e.target.value});
    }

    async getSong(song) {
        try {
            const response = await getSongs(song);
            console.log(response)
        } catch (error) {
            console.log('error');
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.song}
                    onChange={this.handleChange}
                    placeholder="Song Artist"
                />

                <br/>

                <button onClick={this.getSong(this.state.song)}> Search </button>
            </div>
        );
    }
}

export default SearchBar;
