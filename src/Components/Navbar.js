import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import aloha from '../TestImages/logo.png'
import "../testcss.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
            <div>
        <h3 style={{fontFamily:'cursive',fontWeight:700,fontSize:20,marginLeft:7}}>Aloha</h3>  </div>
       {/* <img width={100} height={70} src ={aloha} alt="hi"/> */}
      
      <div style={{fontFamily:'IBM Plex Mono',fontWeight:400,fontSize:16}}>
      <ul style={{fontStyle:'IBM Plex Mono', marginRight:40}} className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
        Home
        </li>
        <li>
          Surfing
        </li>
        <li>
          Hula
        </li>
        <li>
          Volcano
        </li>
        </ul>
        </div>
        <div >
        <ul style={{marginRight:40}} className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li className="book-button">
          <a href="/">Book a Trip</a>
        </li>
        </ul>
        </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
      </div>
      {isMobileMenuOpen && <div className="mobile-menu-drawer">Mobile Menu Drawer</div>}
    </nav>
  );
};

export default Navbar;
