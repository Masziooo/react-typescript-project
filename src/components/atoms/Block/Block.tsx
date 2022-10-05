import React from "react";
import Icon from "../Icon/Icon";
import { BlockProps } from "./Block.models";
import "./Block.styles.scss";

const Block = ({ icon }: BlockProps) => {
  return (
    <>
      <div className="block">
        <div className="block__icon">
          <Icon name={icon} />
        </div>
        <p className="block__text">
          <a className="block__text--hidden" href="/">
            View details
          </a>
          <Icon name={"arrow"} />
        </p>
      </div>
    </>
  );
};

export default Block;
