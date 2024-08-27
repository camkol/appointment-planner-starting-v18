import React from "react";

export const Tile = ({ contacts }) => {
  return (
    <div className="tile-container">
      <h2>{contacts.name}</h2>

      <p>{contacts.phone}</p>
      <p>{contacts.email}</p>
    </div>
  );
};
