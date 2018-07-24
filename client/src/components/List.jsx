import React, { Component } from 'react';
import ListDetail from './listdetail.jsx'

class List extends Component {
  constructor(props){
    super(props)

  }
  render() {
    let APIresult = this.props.data || false
    return (
      <div>
        {APIresult ? (
            <ListDetail data = {this.props.data} />
      ) : (
        <div> </div>
      )}
      </div>
    );
  }
}

export default List;
