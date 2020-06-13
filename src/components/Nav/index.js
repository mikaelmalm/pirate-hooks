import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export const Nav = ({ name = "Scallywags" }) => (
  <div className="Nav">
    <Link to="/"> {`<= Back to land ${name}`}</Link>
  </div>
);
