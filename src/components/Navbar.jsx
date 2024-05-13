import React, { useState } from "react";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleNavToggler = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <nav>
      <img src="/images/brand_logo.png" alt="" />
      <ul>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            menu
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            location
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            about
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            contact
          </a>
        </li>
      </ul>
      <div>
        <button>login</button>
        <button className="hamburger" onClick={handleNavToggler}>
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </div>
      {/* mobile navbar */}
      <ul className={isMobileNavOpen ? "mobile-navbar show" : "mobile-navbar"}>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            menu
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            location
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            about
          </a>
        </li>
        <li>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
