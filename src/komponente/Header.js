import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>ToDo List</h1>
      <Link to="/to-do-lista" style={linkStyle}> Home </Link> | 
      <Link to="/about" style={linkStyle}> About App </Link>
    </header>
  );
}

const linkStyle = {
  color: 'white'
}

export default Header;