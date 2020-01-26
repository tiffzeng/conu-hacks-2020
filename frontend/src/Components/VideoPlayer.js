import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url,
      playing: this.props.playing
    };
  }
  render() {
    return (
      <div>
        <div>
            {this.props.url.indexOf("mp4") !== -1 ? (
              <ReactPlayer url={this.state.url} playing={this.state.playing} />
            ) : (
              this.state.imageUrl && <img src={this.state.url} alt="new" width="640" height="360"/> 
            )}
          </div>
      </div>
    );
  }
}
