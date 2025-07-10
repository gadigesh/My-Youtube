import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = ["All", "Game", "Songs", "Live", "Cooking", "Cricket", "Movies"];
  return (
    <div className="flex">
      {list.map((btn, index) => (
        <Button key={index} name={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
