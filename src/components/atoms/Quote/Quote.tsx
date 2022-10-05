import React from "react";
import Icon from "../Icon/Icon";
import Image from "../Image/Image";
import { QuoteProps } from "./Quote.models";
import "./Quote.styles.scss";

const Quote = ({ data: { title, name } }: QuoteProps) => {
  return (
    <>
      <div className="quote">
        <Icon name="quote2" />
        <p>
          <em>{title}</em>
        </p>
        <div className="quote__second">
          {name} <Icon name="quote1" />
        </div>
      </div>
      <Image path={"logo"} />
    </>
  );
};

export default Quote;
