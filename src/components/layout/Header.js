import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderCSS } from './Header.css';

class Header extends Component {

  // state = {
  //   active: 'search-not-active',
  //   searchWords: ''
  // }

  // inputChange(event) {
  //   const value = event.target.value === '' ? 'search-not-active' : 'search-active';
  //   this.setState({
  //     active: value,
  //     searchWords: event.target.value
  //   })
  // }
  // clearSearch(event) {
  //   this.setState({
  //     searchWords: '',
  //     active:this.value
  //   });
  //   this.value = this.state.searchWords === '' ? 'search-not-active' : 'search-active'; 
  // }

  render() {
    // console.log(this.state.searchWords)

    return (
      <header style={headerStyle}>
        {/*
           <header style={this.state.active === 'search-active' ? activeStyle : headerStyle}>
          <div>
          <span>Search </span>
          <input className="input" value={this.state.searchWords} onChange={(event) => this.inputChange(event)} />
          &nbsp;<button className="btn btn-success btn-sm " onClick={(event) => this.clearSearch(event)}>Clear</button>
        </div> */}

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              {/* <img src="tmmpurple.png"   alt="tmm logo" /> */}
            </a>
          </div>

          <hr />
          <div style={HeaderCSS} id="navbarBasicExample" className="navbar-menu" >
            <div className="navbar-start">


              <NavLink className="navbar-item" activeClassName="is-active" exact style={linkStyle} to="/">HOME</NavLink> 
              <NavLink className="navbar-item" activeClassName="is-active" exact style={linkStyle} to="/console">CONSOLE</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" style={linkStyle} to="/data-api">DATA</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" style={linkStyle} to="/data-admin">EDIT</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" style={linkStyle} to="/about">ABOUT</NavLink>

            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a href="/register" className="button is-info">
                    <strong>Sign up</strong>
                  </a>
                  <a href="/login" className="button is-light">
                    Log in
                </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      
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
// let activeStyle = {
//   background: '#a4bec6',
//   color: 'white',
//   textAlign: 'center',
//   padding: '10px'
// } 

let linkStyle = {
  textDecoration: 'none',
  fontSize: '1.4rem'
}

export default Header;