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

      const srch = {
        padding: "18px",
        border: "1px solid #173F5F",
        width: "20vw",
        borderRadius:"5px",
        fontSize: "10pt"
      };

      const btn = {
        padding: "18px",
        border: "1px solid #173F5F",
        borderRadius:"5px",
        width: "100px",
        fontWeight: "bold",
        fontSize: "10pt",
        color: "white",
        backgroundColor: "#ED553B"
      };


        return (
            <div>
                <form>
                <input
                    style={srch}
                    type="text"
                    value={this.state.song}
                    onChange={this.handleChange}
                    placeholder="Search a song and an artist"
                />
                <button
                  style={btn}
                  disabled={!this.state.song}
                  onClick={(e) => this.getSong(e,this.state.song)}> Search
                </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
