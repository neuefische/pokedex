import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <a className="Navigation--anchor" href="/">
        Home
      </a>
      <a className="Navigation--anchor" href="/pokedex">
        Pokedex
      </a>
    </nav>
  );
}
