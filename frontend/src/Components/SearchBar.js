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

    async getSong(e, song) {
        this.setState({
          song:""
        })

      e.preventDefault();
        try {
            const response = await getSongs(song);
            this.props.passData(response.data);
        } catch (error) {
            console.log('error');
        }
    }

    render() {
        return (
            <div>
                <form>
                <input
                    type="text"
                    value={this.state.song}
                    onChange={this.handleChange}
                    placeholder="Song Artist"
                />

                <br/>

                <button disabled={!this.state.song}
                          onClick={(e) => this.getSong(e,this.state.song)}> Search </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
