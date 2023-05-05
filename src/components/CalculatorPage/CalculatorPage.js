import "./CalculatorPage.css"
import React from "react"
import { useState, useContext } from "react";
import Screen from "./Screen";


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const CalculatorPage = () => {
  return (
    <>
      <Screen value={0} />
      <div className="buttonBox">
        {btnValues.map((item) =>
          item.map((each) => (
            <div>
              <button>{each}</button>
            </div>
          ))
        )}
      </div>
    </>
  );

}



export default CalculatorPage