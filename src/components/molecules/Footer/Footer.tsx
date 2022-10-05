import React from "react";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import { FooterProps } from "./Footer.models";
import "./Footer.styles.scss";

const Footer = ({
  footer: { title, inputText, description, links, bottom },
}: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <h2>{title}</h2>
        <div>
          <input placeholder={inputText} />
          <Button variant={"secondary"} title={"Subscribe"} />
        </div>
        <p>{description}</p>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__links">
          {links.map((group) => (
            <ul>
              {group.group.map((link) => (
                <li>
                  <a href={link}>{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="footer__bottom__icons">
          <a href="/">
            <Icon name="facebook" />
          </a>
          <a href="/">
            <Icon name="twitter" />
          </a>
          <a href="/">
            <Icon name="linkedin" />
          </a>
          <a href="/">
            <Icon name="m" />
          </a>
          <a href="/">
            <Icon name="github" />
          </a>
        </div>
        <div className="footer__bottom__copyright">
          <p>
            © 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.
          </p>
          {bottom.map((link) => (
            <p>
              <a href={link}>{link}</a>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
