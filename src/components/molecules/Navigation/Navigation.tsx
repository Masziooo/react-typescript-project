import React from "react";
import Button from "../../atoms/Button/Button";
import "./Navigation.styles.scss";
import { NavigationProps } from "./Navigation.models";

const Navigation = ({ name, links }: NavigationProps) => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <div className="nav__menu__logo">
          <p>{name}</p>
        </div>
        <div className="nav__menu__list">
          {links.map((item, i) => (
            <p key={i}>
              <a href={item}>{item}</a>
            </p>
          ))}
        </div>
      </div>
      <div>
        <Button variant={"primary"} title={"Contact Us"} />
      </div>
    </nav>
  );
};

export default Navigation;
