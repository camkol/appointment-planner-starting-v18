import React from "react";

export const Tile = ({ contacts }) => {
  return (
    <div className="tile-container">
      {Object.values(contacts).map((contact, index) => {
        return <p key={index}>{contact}</p>;
      })}
    </div>
  );
};
