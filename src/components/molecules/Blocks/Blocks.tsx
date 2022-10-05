import React from "react";
import Block from "../../atoms/Block/Block";
import { BlocksProps } from "./Blocks.models";
import "./Blocks.styles.scss";

const Blocks = ({ blocks: { title, description, question } }: BlocksProps) => {
  return (
    <article>
      <div className="blocks">
        <h2>{title}</h2>
        <span dangerouslySetInnerHTML={{ __html: description }} />
        <p>{question}</p>
      </div>
      <div className="blocks--wrapper">
        <Block icon="wheelGray" />
        <Block icon="sccissorsGray" />
        <Block icon="androidGray" />
        <Block icon="checkGray" />
      </div>
    </article>
  );
};

export default Blocks;
