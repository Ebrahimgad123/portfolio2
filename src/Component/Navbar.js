import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    background: 'black',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const responsiveNavStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  return (
    <nav style={navStyle}>
      <div style={responsiveNavStyle}>
        <Link to="portfolio2/" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>
         <h2>Ibrahim</h2> 
        </Link>
        <ul style={{ listStyle: 'none', display: 'flex', padding: 0 }}>
          <li>
            <NavLink as={Link} to="portfolio2/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink as={Link} to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink as={Link} to="/projects" style={linkStyle}>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


