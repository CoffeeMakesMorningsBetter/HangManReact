import React from "react";

const HangMan2 = ({ guesses }) => {
  return (
    <div className="container">
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img
          className={guesses <= 6 ? "" : "cover"}
          src="https://images.freeimages.com/images/large-previews/416/short-totem-1418812.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img
          className={guesses <= 5 ? "" : "cover"}
          src="http://bapd.org/091227-01-moss-on-the-minor-sideways-tree-small.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img
          className={guesses <= 4 ? "" : "cover"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqy9JMByPGu6WwoHvWhC6cDy7jwxQE2jqO2vFUT4PhWDj9xh4SQ"
          alt=""
        />
      </div>
      <div className="item">
        <img
          className={guesses <= 3 ? "" : "cover"}
          src="https://i.pinimg.com/originals/2d/fe/90/2dfe90250e928c06d25de879b8eef416.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img
          className={guesses <= 2 ? "" : "cover"}
          src="https://images.freeimages.com/images/large-previews/e9b/a-trunk-saxed-1188623.jpg"
          alt=""
        />
      </div>
      <div className="item">
        <img src="" alt="" />
      </div>
      <div className="item">
        <img
          className={guesses <= 1 ? "" : "cover"}
          src="https://img1.cgtrader.com/items/692752/f506b7c5a7/tree-stump-3d-model-max-obj-fbx-mat.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HangMan2;
