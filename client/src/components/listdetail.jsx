import React, { Component } from 'react';
import '../styles/listDetail.css'

class ListDetail extends Component {
  constructor(props){
    super(props)
    //Selected State starts out as Favorited, and changes as client interacts with drop-down menu.
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
    // this.props.data is immutable, so make it immutable by assigning into a new variable
    // sort the data 
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
      // Map through the mutable data and create a new table row with each different element from the response
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
<th className='tdResponsive' > Created At </th>
<th className='tdResponsive' > Tweet </th>
<th className='tdResponsive' > Favorite </th>
<th className='tdResponsive' > Retweet </th>
        {data.map((tweet,index) => {
           return  (
            <tr key ={index} className='tweetInfo'>
            <td className='tdResponsive'>{tweet.created_at} </td>
            <td className='tdResponsive'>{tweet.text} </td>
            <td className='tdResponsive'>{tweet.favorite_count}</td>
            <td className='tdResponsive'>{tweet.retweet_count}</td>
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