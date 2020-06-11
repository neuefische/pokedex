import React from "react";
import "./Header.css";

export default function Header({ children }) {
  return (
    <header className="Header">
      <h1 className="Header--title">Pokedex</h1>
      {children}
    </header>
  );
}
