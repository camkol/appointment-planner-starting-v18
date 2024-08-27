import React from "react";

export const TileList = ({ contacts }) => {
  return (
    <div>
      <h2>{contacts.name}</h2>

      <p>{contacts.phone}</p>
      <p>{contacts.email}</p>
    </div>
  );
};
