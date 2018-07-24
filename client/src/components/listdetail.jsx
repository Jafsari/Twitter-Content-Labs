import React, { Component } from 'react';
import '../styles/listDetail.css'

class ListDetail extends Component {
  constructor(props){
    super(props)
    this.state ={
        type:'Favorited',
    }
  }
handleSelect = (e) => {
    this.setState(
      {
        type: e.target.value
      }
    )
    let data = this.props.data
    if (this.state.type === 'Retweets'){
      data = data.sort((a,b) => {
        return  b.favorite_count - a.favorite_count
      })
    } 
      if (this.state.type === 'Favorited'){
        data = data.sort((a,b) => {
          return b.retweet_count - a.retweet_count
        })
    }
  }
  render() {
      let data = this.props.data
    return (
        <div className='list'>
        Sort By:
         <form>
          <label>
        <select className='label' value={this.state.type} onChange={this.handleSelect}>
            <option value="Favorited">Favorited</option>
            <option value="Retweets">Retweets</option>
          </select>
          </label>
        </form>
        <div className='tweetTitle'>
        Tweets
        </div>
<div className='responsive'>
<table id ='tweetTable' >
<th> Created At </th>
<th> Tweet </th>
<th> Favorite </th>
<th> Retweet </th>
        {data.map((tweet,index) => {
           return  (
            <tr key ={index} className='tweetInfo'>
            <td className='tweetCreate'>{tweet.created_at} </td>
            <td>{tweet.text} </td>
            <td>{tweet.favorite_count}</td>
            <td>{tweet.retweet_count}</td>
            </tr>
           )
        })}
        </table>
        </div>
        </div>
    );
  }
}

export default ListDetail;