// Navigation.js
import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Navigation = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <Link to={`/`}>{"HOME"}</Link>
        </li>
        <li>
          <Link to={`/work`}>{"WORK"}</Link>
        </li>
        <li>
          <Link to={`/services`}>{"SERVICES"}</Link>
        </li>
        <li>
          <Link to={`/approach`}>{"APPROACH"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
