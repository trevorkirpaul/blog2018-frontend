import React from 'react';
import './TitlePanel.css';

const TitlePanel = props => (
  <div className="TitlePanel">
    <h1>{props.header}</h1>
    <h2>{props.subHeader}</h2>
  </div>
);

export default TitlePanel;
