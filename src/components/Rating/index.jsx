import { Star } from "components/Icon";
import React from "react";

function Rate({ index }) {
  const origin = [];
  let temp = index;
  while (temp !== 0) {
    origin.push("#FDBC15");
    temp--;
    if (temp === 0) {
      for (let i = 0; i < 5 - index; i++) {
        origin.push(false);
      }
    }
  }

  return (
    <>
      <div className="stars">
        {origin.map((color, index) => {
          return color ? (
            <Star key={index} color={color} fill={color} />
          ) : (
            <Star key={index} />
          );
        })}
      </div>
    </>
  );
}

export default Rate;
