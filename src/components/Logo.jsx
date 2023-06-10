import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/sitelogo.png";

const Logo = () => {
  return (
    <div className="brand-fix-logo">
      <Link to="/">
        <img src={logo} alt="netflix clone" />
      </Link>
    </div>
  );
};

export default Logo;
