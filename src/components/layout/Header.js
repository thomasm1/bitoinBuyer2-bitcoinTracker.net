import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {HeaderCSS} from './Header.css';

class Header extends Component {

  state = {
    active: 'search-not-active',
    searchWords: ''
  }

  inputChange(event) {
    const value = event.target.value === '' ? 'search-not-active' : 'search-active';
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
    this.value = this.state.searchWords === '' ? 'search-not-active' : 'search-active'; 
  }

  render() {
    console.log(this.state.searchWords)
    return (
      <header  style={this.state.active === 'search-active' ? activeStyle : headerStyle}>
        <div>
          <span>Search </span>
          <input className="input" value={this.state.searchWords} onChange={(event) => this.inputChange(event)} />
          &nbsp;<button className="btn btn-success btn-sm " onClick={(event) => this.clearSearch(event)}>Clear</button>
        </div>
        <hr /><br />
        <h2>ReactJS CoinTracker Console</h2>
        <hr />
        <div style={HeaderCSS} >
        <NavLink activeClassName="is-active" exact style={linkStyle} to="/">HOME</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
        <NavLink  activeClassName="is-active" style={linkStyle} to="/data-api">DATA API</NavLink>&nbsp;&nbsp; | &nbsp;&nbsp;
        <NavLink  activeClassName="is-active" style={linkStyle} to="/about">ABOUT</NavLink>
        </div>
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
  textDecoration: 'none', 
}

export default Header;