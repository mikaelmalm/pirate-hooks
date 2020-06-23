// This f*#!@#!@$!! is messing with me, so I disable it.
/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./index.scss";
import { Title, MapsSection, Nav } from "components";
import { useParams } from "react-router-dom";

// Very cool import of data :sweat_smile:
import treassureMaps from "data.json";

const MapView = () => {
  const [treassureMap, setTreassureMap] = useState({});
  const [relatedMaps, setRelatedMaps] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Set data in state
    setTreassureMap(treassureMaps.find((map) => map.id === id));
    setRelatedMaps(treassureMaps.filter((map) => map.id !== id));
  }, []);

  if (Object.keys(treassureMap).length < 1) return null;

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
          <img
            src={`/${treassureMap.image}`}
            alt="Map of the sea where the treassure is located"
          />
        </div>
      </div>
    </div>
  );
};

export default MapView;
