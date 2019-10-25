import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  state = {
    active: 'not-active',
    searchWords: ''
  }

  inputChange(event) {
    const value = event.target.value === '' ? 'not-active' : 'active';
    this.setState({
      active: value,
      searchWords: event.target.value
    })
  }
  clearSearch(event) {
    this.setState({
      searchWords: '',
      active:this.value
    });
    this.value = this.state.searchWords === '' ? 'not-active' : 'active'; 
  }

  render() {
    console.log(this.state.searchWords)
    return (
      <header style={this.state.active === 'active' ? activeStyle : headerStyle}>
        <div style={{float:"right"}}>
          <span>Search </span>
          <input className="input" value={this.state.searchWords} onChange={(event) => this.inputChange(event)} />
          &nbsp;<button className="btn btn-success btn-sm " onClick={(event) => this.clearSearch(event)}>Clear</button>
        </div>
        <hr /><br />
        <h2>ReactJS CoinTracker Console</h2>
        <hr />
        <Link style={linkStyle} to="/">HOME</Link>&nbsp;&nbsp; | &nbsp;&nbsp;<Link style={linkStyle} to="/about">ABOUT</Link>
        <hr />
      </header>
    )
  }
}

let headerStyle = {
  background: 'lightblue',
  color: 'darkblue',
  textAlign: 'center',
  padding: '10px'
}
let activeStyle = {
  background: '#a4bec6',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}


let linkStyle = {
  color: 'darkblue',
  textDecoration: 'none'
}
export default Header;