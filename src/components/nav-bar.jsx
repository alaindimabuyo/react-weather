import React from "react";

import AuthNav from "./auth-nav";
import MainNav from "./main-nav";
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">    
          <AuthNav />
          <div className="navbar-brand logo" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;