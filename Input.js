import React from "react";
import "./Input.css"

const Input = (props) => {
  return (
    <div className="LoginPage">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
