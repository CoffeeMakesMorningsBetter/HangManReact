import React from "react";

const HangMan = ({ image }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <img className="hangman" src={image[0]} />
      </div>
      <div>
        <img className="hangman" src={image[1]} />
      </div>
      <div>
        <img className="hangman" src={image[2]} />
      </div>
      <div>
        <img className="hangman" src={image[3]} />
      </div>
      <div>
        <img className="hangman" src={image[4]} />
      </div>
    </div>
  );
};

export default HangMan;
