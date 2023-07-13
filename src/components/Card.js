import React from "react";

import "./Card.css";

export default function Card(props) {
  const classes = "card " + props.className;
  const ids = props.id;
  return (
    <div className={classes} id={ids}>
      <img src={props.img} alt="TODO: TITLE" />
      <h2>{props.content.title}</h2>
      <p>{props.content.description}</p>
    </div>
  );
}
