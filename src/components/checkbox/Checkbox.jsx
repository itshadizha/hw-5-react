import React from "react";

const Checkbox = ({ onChange, checked }) => {
  return <input checked={checked} type="checkbox" onChange={onChange}></input>;
};

export default Checkbox;
