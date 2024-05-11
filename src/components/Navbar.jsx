import React from "react";

function Navbar() {
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
      <button>login</button>
    </nav>
  );
}

export default Navbar;
