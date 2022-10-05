import React from "react";
import Button from "../../atoms/Button/Button";
import Image from "../../atoms/Image/Image";
import { BannerProps } from "./Banner.models";
import "./Banner.styles.scss";

const Banner = ({
  data: { strongText, normalText, description, buttonText },
}: BannerProps) => {
  return (
    <article>
      <div className="banner">
        <div className="banner__text">
          <h1>
            <strong>{strongText}</strong> {normalText}
          </h1>
          <p>{description}</p>
          <Button variant={"primary"} title={`${buttonText}`} />
        </div>
        <div className="banner__image">
          <Image path={"picture"} />
        </div>
      </div>
    </article>
  );
};

export default Banner;
