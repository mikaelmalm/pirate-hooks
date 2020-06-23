import React from "react";
import "./index.scss";
import treassureMaps from "data.json";

// components
import { Title, SubTitle, MapsSection } from "components";

// assets
import PalmImage from "assets/palm.svg";
import { useHistory } from "react-router-dom";

const Island = () => (
  <div className="Island">
    <img src={PalmImage} alt="palm" />
    <div className="land"></div>
  </div>
);

const HomeView = () => {
  const history = useHistory();

  // this code is secure, trust me, I know codes
  const navigateToSecret = () => {
    history.push("/log");
  };

  return (
    <div className="HomeView">
      <div>
        <Title>Welcome to</Title>
        <SubTitle>Treassure Island!</SubTitle>
      </div>

      <MapsSection maps={treassureMaps} headline="Maps" />

      <Island />

      <button className="hiddenButton" onClick={navigateToSecret} />
    </div>
  );
};

export default HomeView;
