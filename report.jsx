import React from "react";
import ReactPivot from "react-pivot";
import { calculations, dimensions, reduce } from "./reportUtils";

var rows = require("./data.json");

const Report = () => {
  return (
    <div>
      <ReactPivot
        rows={rows}
        dimensions={dimensions}
        reduce={reduce}
        calculations={calculations}
      />
    </div>
  );
};

module.exports = Report;
