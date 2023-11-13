import { useState, useRef } from "react";
import "./addButtons.css";

const AddButton = (props) => {
  const knopka = useRef();

  return (
    <button ref={knopka}   onClick={props.onClick} className={props.isActive ? 'button active' : 'button'}>
      {props.isActive ? "remove" : "add"}
    </button>
  );
};

export default AddButton;
