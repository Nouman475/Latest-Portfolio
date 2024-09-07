import React, { useState } from 'react'
import "./../styles/index.css";
import {Link} from 'react-router-dom'
let left = "{"
let right = "}"
const bracStyle = {
  color: "#59e5f4",
  fontWeight:"800"
}

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header>
        <nav>
        <div id="logo" className='fs-2'>
          <span style={bracStyle}>{left}</span>
             MN
          <span style={bracStyle}>{right}</span>
        </div>
          <ul className={`nav-ul ${menuOpen ? 'show' : ''}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="project">Projects</Link>
            </li>
          </ul>
          <i className="fs-1 fa-solid fa-bars" onClick={toggleMenu}></i>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
