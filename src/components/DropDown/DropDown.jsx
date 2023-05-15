import "./dropDown.style.css";
import React, { useState } from "react";
import dogImg from "../images/Dog.jpg";

const DropData = [
  {
    id: 1,
    name: "Tomasz",
    email: "tomasz@gmail.com",
    lifemotto: "What you choose to focus on becomes your reality. ",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 2,
    name: "Murat",
    email: "murat@gmail.com",
    lifemotto: "Nothing will make you feel better except doing the work.",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 3,
    name: "Aidina",
    email: "aidina@gmail.com",
    lifemotto: "Always find a reason to laugh.",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 4,
    name: "Alina",
    email: "alina@gmail.com",
    lifemotto: "Always believe that something wonderful is about to happen.",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 5,
    name: "Tink",
    email: "Tink@gmail.com",
    lifemotto: "Sometimes you win, sometimes you learn.",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 6,
    name: "Esma",
    email: "Esma@gmail.com",
    lifemotto: "Eat healthy, sleep well, breathe deeply, enjoy life.",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 7,
    name: "Shahzod",
    email: "shahzod@gmail.com",
    lifemotto: "Life doesn't have to be perfect to be wonderful.",
    image: dogImg,
    button: "Contact",
  },
  {
    id: 8,
    name: "Elnura",
    email: "elnura@gmail.com",
    lifemotto:
      "If you can't stop thinking about it, don't stop working for it.",
    image: dogImg,
    button: "Contact",
  },
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container">
        <div className="card">
          <h1 onClick={toggling}>Click here</h1>
          {isOpen && (
            <div className="dropContainer">
              {DropData.map((el) => (
                <div className="smallContainer" key={el.id}>
                  <img src={el.image} alt="" />
                  <ul>
                    <li>Name: {el.name}</li>
                    <li>Email: {el.email}</li>
                    <li>Motto: {el.lifemotto}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DropDown;
