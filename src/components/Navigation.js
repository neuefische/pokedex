import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <Link className="Navigation--anchor" to="/">
        Home
      </Link>
      <Link className="Navigation--anchor" to="/pokedex">
        Pokedex
      </Link>
    </nav>
  );
}
