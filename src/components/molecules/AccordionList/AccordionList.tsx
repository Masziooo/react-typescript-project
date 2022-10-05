import React from "react";
import Accordion from "../../atoms/Accordion/Accordion";
import { AccordionListProps } from "./AccordionList.models";
import "./AccordionList.styles.scss";

const AccordionList = ({
  accordions: { title, details },
}: AccordionListProps) => (
  <article className="accordion-section">
    <h2>{title}</h2>
    <div className="accordion-section__list">
      {details?.map(({ visibleContent, hiddenContent }, index) => (
        <Accordion
          num={`0${index + 1}.`}
          {...{ visibleContent, hiddenContent, index }}
          key={visibleContent}
        />
      ))}
    </div>
  </article>
);

export default AccordionList;
