import React from 'react';
import './navigation.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>

    <div className='bg'>
     
    </div>
    </div>
  
  )
};


export default NavBar;
