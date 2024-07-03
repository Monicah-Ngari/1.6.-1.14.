import React from "react";

const StatisticLine = ({ text, value }) => (
  <p>
    <strong>{text}:</strong> {value}
  </p>
);

export default StatisticLine;
