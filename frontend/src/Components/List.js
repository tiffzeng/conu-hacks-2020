import React from 'react';
import { getIDS } from '../api/SearchID';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id:''};
    this.handleChange = this.handleChange.bind(this);
    this.getID = this.getID.bind(this);
  }

  handleChange(e) {
    this.setState({id: e.target.value});
  }

  async getID(e, id) {
    this.setState({
      id:""
    })

    e.preventDefault();
    try {
      const response = await getIDS(id);
      this.props.passData(response.data);
    } catch (error) {
      console.log('error');
    }
  }
  render() {

    const mybtn ={
      padding: "10px",
      borderRadius:"4px",
      border:"1px solid #212833",
      width: "28vw",
      fontSize: "10pt",
      color: "#212833"
    };


    return (
          this.props.items.map((item, index) =>
            <button style={mybtn}
                    onClick={() => alert(item['id'])}
                    key={index}>{item['title']} by {item['artistName']}</button>)

    );
  }
}

