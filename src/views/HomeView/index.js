import React from "react";
import "./index.scss";
import treassureMaps from "data.json";

// components
import { Title, SubTitle, MapsSection } from "components";

// assets
import PalmImage from "assets/palm.svg";

const Island = () => (
  <div className="Island">
    <img src={PalmImage} alt="palm" />
    <div className="land"></div>
  </div>
);

const HomeView = () => {
  return (
    <div className="HomeView">
      <div>
        <Title>Welcome to</Title>
        <SubTitle>Treassure Island!</SubTitle>
      </div>

      <MapsSection maps={treassureMaps} headline="Maps" />

      <Island />
    </div>
  );
};

export default HomeView;
