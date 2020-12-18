import React from "react";
import logo from "./../../logo.svg";
import "./app-header.css";

const Header = () => {
  return (
    <header className="d-flex app-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Tsiferov Sergii</h1>
      <h5>5 записей, из них 3 понравились</h5>
    </header>
  );
};

export default Header;
