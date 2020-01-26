import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: this.props.url
    };
  }
  render() {
    return (
      <div>
        <ReactPlayer url={this.state.url} playing />
      </div>
    );
  }
}
