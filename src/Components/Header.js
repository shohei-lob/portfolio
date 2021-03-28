import React from "react";
import Typed from "react-typed"

function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Shohei'portfolio</h1>
        <Typed 
        className="typed-text"
        strings={["web Design", "web Development", "Facebool ads", "Google ads"]}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <a href="#"></a>
      </div>

    </div>
  );
}

export default Header;
