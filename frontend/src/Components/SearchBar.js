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
        padding: "12px",
        border: "1px solid #212833",
        width: "20vw",
        borderRadius:"4px",
        fontSize: "10pt"
      };

      const btn = {
        padding: "12px",
        border: "1px solid #212833",
        borderRadius:"4px",
        width: "100px",
        fontWeight: "bold",
        fontSize: "10pt",
        color: "white",
        backgroundColor: "#eb4c02"
      };


        return (
            <div>
                <form>
                <input
                    style={srch}
                    type="text"
                    value={this.state.song}
                    onChange={this.handleChange}
                    placeholder="Search a song or an artist"
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
