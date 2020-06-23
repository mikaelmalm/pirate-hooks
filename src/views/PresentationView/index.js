import React from "react";

import "./index.scss";
import { Title } from "components";

import { usePowerPoint } from "hooks/usePowerPoint";

const PresentationView = () => {
  const { title, subTitle, items } = usePowerPoint();

  return (
    <div className="PresentationView">
      <Title>{title}</Title>
      <h3>{subTitle}</h3>

      <ul>
        {items && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default PresentationView;
