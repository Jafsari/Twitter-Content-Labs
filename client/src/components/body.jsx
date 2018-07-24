import React, { Component } from 'react';
import '../styles/topSection.css';
import axios from 'axios';
import List from './List.jsx'

class TopSection extends Component {
    constructor(props){
        super(props)
        //Different parameters for the server to use for Twitter's API request.
        this.state ={
            hashtag:'',
            results: '',
            type: 'Popular',
            APIresult:''
        }
    }
    //Control Form
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
        console.log(this.state)
      }
    handleSelect = (e) => {
        this.setState(
          {
            type: e.target.value
          }
        );
      }
    handleClick = (e) => {
      e.preventDefault();
      this.setState({APIresult:''})
      let config = { hashtag: this.state.hashtag,
      results: this.state.results,
      type: this.state.type
    }
    //Request to Server
    //Include state within config
      axios.post('http://localhost:1100/api/twitter',config).then((response) => {
        console.log('hi')
        this.setState({APIresult:response.data.statuses})
        console.log(this.state)
        this.setState({hashtag:'',results:''})
      }).catch((err) => {
        console.log(err.message)
      })
    }

  render() {
    return (
    <div className='container'>
    <div className='title'>
      Search Tweets!
    </div>
      <div>
          <form>
        <input className='input' 
        placeholder= 'Enter hashtags'
        onChange={this.handleChange}
        name="hashtag"
        value={this.state.hashtag}
        />
        </form>
     </div>
     <div>
        <form>
        <input className='input'
        placeholder ='Enter Number of Results'
        onChange={this.handleChange}
        name="results"
        value={this.state.results}
        />
        </form>
     </div>
     <div>
       <div>
        <form>
          <label>
        <select className='label' value={this.state.type} onChange={this.handleSelect}>
            <option value="Popular">Popular</option>
            <option value="Most Recent">Most Recent</option>
            <option value="Mixed">Mixed</option>
          </select>
          </label>
        </form>
        </div>
     </div>
     <div className ='inner'>
     <button onClick ={this.handleClick} className='button'> Submit </button>
     </div>
     <List data = {this.state.APIresult} />
    </div>
    );
  }
}

export default TopSection;
