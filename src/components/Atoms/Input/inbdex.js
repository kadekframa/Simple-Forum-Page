import React from 'react';

const Input = (props) => {
  return (
        <input type="text" className={props.className} placeholder={props.placeholder} />
  )
}

export default Input;
