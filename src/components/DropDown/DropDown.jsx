import "./dropDown.style.css";
import React, { useState } from "react";
import DropData from "./DropData";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <>
      <div className="container">
        {DropData.map((el, id) => {
          return (
            <div key={id} className="card">
              <h1 onClick={toggling}>{selectedOption || "Select Drop Down"}</h1>
              {options.map((option) => (
                <div
                  className="dropContainer"
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option}
                </div>
              ))}
              <img src={el.image} alt=""></img>
              <ul>
                <li>Name: {el.name}</li>
                <li>Email: {el.email}</li>
                <li>Motto: {el.lifemotto}</li>
              </ul>
              <button>{el.button}</button>
              );
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
