import React from 'react';
import './Button.css';

const Button = props => (
  <button
    className={props.disabled ? 'Button_Disabled' : 'Button'}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
