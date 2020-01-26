import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const mybtn ={
      padding: "10px",
      borderRadius:"4px",
      border:"1px solid #212833",
      width: "55vw",
      fontSize: "10pt",
    };


    return (

          this.props.items.map((item, index) => <button style={mybtn} key={index}>{item['title']} by {item['artistName']}</button>)

    );
  }
}

