import React from 'react';
import AuthenticationButton from './authentication-button';

const AuthNav = () => (
  <div className="navbar-nav ml-auto" style={{display: 'flex', justifyContent: "space-between", flexDirection: "row", alignContent: 'center'}}>
    <button onClick={() => window.location.href = "/"}>Home</button>
    <AuthenticationButton />
  </div>
);

export default AuthNav;