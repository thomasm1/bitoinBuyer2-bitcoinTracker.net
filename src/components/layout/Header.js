import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header style={headerStyle}>
      <h2>ReactJS CoinTracker Console</h2>
      <hr />
      <Link style={linkStyle} to="/">HOME</Link>&nbsp;&nbsp; | &nbsp;&nbsp;<Link style={linkStyle} to="/about">ABOUT</Link>
      <hr />
    </header>
  )
}

const headerStyle = {
  background: 'lightblue',
  color: 'darkblue',
  textAlign: 'center',
  padding: '10px'
}


const linkStyle = {
  color: 'darkblue',
  textDecoration: 'none'
}
export default Header;