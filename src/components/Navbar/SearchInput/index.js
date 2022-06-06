import React from 'react';

const SearchInput= (props) => {
  return (
      <input type="text" className={props.className} placeholder={props.placeholder} />
  )
}

export default SearchInput;