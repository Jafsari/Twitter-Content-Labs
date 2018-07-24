import React, { Component } from 'react';
import ListDetail from './listdetail.jsx'

class List extends Component {
  constructor(props){
    super(props)

  }
  render() {
    let APIresult = this.props.data || false
    // Check to see if APIresult if truthy, if so render ListDetail Component, else don't render anything on the page.
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
