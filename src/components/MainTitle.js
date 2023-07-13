import React from "react";
import "./MainTitle.css";

import keyConceptsImage from "../assets/images/key-concepts.png";
export default function MainTitle(props) {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}
