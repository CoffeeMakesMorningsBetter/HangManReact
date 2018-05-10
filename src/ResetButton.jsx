import React from "react";

const ResetButton = ({ reset }) => {
  return (
    <button className="resetButton" onClick={reset}>
      Reset Game
    </button>
  );
};

export default ResetButton;
