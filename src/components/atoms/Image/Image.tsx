import React from "react";
import { ImageProps } from "./Image.models";

const Image = ({ path, alt }: ImageProps) => {
  return (
    <div>
      <img src={require(`../../../images/${path}.png`)} alt={alt} />
    </div>
  );
};

export default Image;
