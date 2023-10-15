import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>FRIEND DATABASE</h1>
      <nav>
        <NavLink to="/login">LOGIN </NavLink>
        <NavLink to="/friends/add">ADD FRIEND </NavLink>
        <NavLink to="/friends">FRIEND LIST </NavLink>
        <NavLink to="/logout">LOGOUT </NavLink>
      </nav>
    </header>
  );
}

export default Header;
