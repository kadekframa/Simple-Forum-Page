import React from 'react';

const Button = (props) => {
  return (
      <button type={props.type} href={props.href} className={props.className}>{props.children}</button>
  )
}

export default Button;
