import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
    this.handleChange = this.handleChange.bind(this);
    this.getID = this.getID.bind(this);
  }

  handleChange(e) {
    this.setState({ id: e.target.value });
  }

  async getID(e, id) {
    e.preventDefault();
    this.props.getID(id);
  }

  render() {
    const mybtn = {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #173F5F',
      width: '28vw',
      fontSize: '10pt',
      color: '#173F5F'
    };

    return this.props.items.map((item, index) => (
      <button style={mybtn} onClick={(e) => this.getID(e, item['id'])} key={index}>
        {item['title']} by {item['artistName']}
      </button>
    ));
  }
}
