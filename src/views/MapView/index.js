import React, { useState, useEffect } from "react";
import "./index.scss";
import { Title, MapsSection } from "components";
import { Link, useParams } from "react-router-dom";

// ignore this :sweat_smile:
import treassureMaps from "data.json";

const Nav = () => (
  <div className="Nav">
    <Link to="/"> {"<= Back to land seacrabs"}</Link>
  </div>
);

const MapView = () => {
  const [treassureMap, setTreassureMap] = useState({});
  const [relatedMaps, setRelatedMaps] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setTreassureMap(treassureMaps.find((map) => map.id === id));
    setRelatedMaps(treassureMaps.filter((map) => map.id !== id));
  }, [id]);

  return (
    <div className="MapView">
      <Nav />

      <div className="map-content">
        <div className="content">
          <Title>{treassureMap.title}</Title>

          <p>{treassureMap.description}</p>
          <MapsSection maps={relatedMaps} headline="Related maps" />
        </div>
        <div className="sea-image">
          <img src={`/${treassureMap.image}`} alt="Image for map" />
        </div>
      </div>
    </div>
  );
};

export default MapView;
