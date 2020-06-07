import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// assets
import MapImage from "assets/treasure-map.svg";

export const Map = ({ title, link }) => (
  <Link className="Map" to={link}>
    <img src={MapImage} alt="Map svg!" />
    <h4>{title}</h4>
  </Link>
);

export const MapsSection = ({ maps, headline }) => (
  <div className="MapsSection">
    <h3>{headline}</h3>
    <div className="Maps">
      {maps.map((map) => (
        <Map title={map.title} link={`/map/${map.id}`} key={map.id} />
      ))}
    </div>
  </div>
);
