import React from "react";

export const Tile = ({ descriptions }) => {
  return (
    <div className="tile-container">
      {Object.values(descriptions).map((description, index) => {
        return <p key={index}>{description}</p>;
      })}
    </div>
  );
};
