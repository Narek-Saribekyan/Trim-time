import { useState, useRef } from "react";
import "./addButtons.css";

const AddButton = () => {
  const [isActive, setIsActive] = useState(false);
  const knopka = useRef();

  const click = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <button ref={knopka} onClick={click} className={isActive ? 'button active' : 'button'}>
      {isActive ? "remove" : "add"}
    </button>
  );
};

export default AddButton;
