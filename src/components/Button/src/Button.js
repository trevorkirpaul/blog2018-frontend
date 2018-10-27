import React from 'react';

const Button = props => (
  <button disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;