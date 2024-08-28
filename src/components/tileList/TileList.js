import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ descriptions }) => {
  return (
    <div>
      {" "}
      {descriptions.map((description, index) => {
        return <Tile key={index} descriptions={description} />;
      })}
    </div>
  );
};
