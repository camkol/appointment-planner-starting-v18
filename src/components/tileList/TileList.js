import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ desciptions }) => {
  return (
    <div>
      {" "}
      {desciptions.map((desciption) => {
        return <Tile desciptions={desciption} />;
      })}
    </div>
  );
};
