import React from "react";
import ReactDOM from "react-dom";

const fName = "Baraka";
const lName = "Ganai";
const number = 3;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>my lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
