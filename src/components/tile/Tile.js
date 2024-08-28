import React from "react";

export const Tile = ({ descriptions }) => {
  const values = descriptions ? Object.values(descriptions) : [];

  return (
    <div className="tile-container">
      {values.map((description, index) => {
        return <p key={index}>{description}</p>;
      })}
    </div>
  );
};
