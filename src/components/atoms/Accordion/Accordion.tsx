import React, { FC, useState } from "react";
import classNames from "classnames";
import { toggleState } from "../../hooks/toggleState";
import { AccordionProps } from "./Accordion.models";
import PlusIcon from "../PlusIcon/PlusIcon";
import "./Accordion.styles.scss";

const Accordion: FC<AccordionProps> = ({
  num,
  visibleContent,
  hiddenContent,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const accordionClasses = classNames("accordion", className, {
    "accordion--open": isOpen,
  });

  const accordionButtonClasses = classNames("accordion__button", {
    "total-disabled--child": !isOpen,
  });

  const renderedAccordion = (
    <>
      <div
        className={accordionButtonClasses}
        onClick={() => toggleState(setIsOpen)}
      >
        <div>
          <p>{num}</p>
          <h3>{visibleContent}</h3>
        </div>
        <PlusIcon open={isOpen} />
      </div>

      <div className="accordion__hidden-content">
        <div className="accordion__description">{hiddenContent}</div>
      </div>
    </>
  );

  return <div className={accordionClasses}>{renderedAccordion}</div>;
};

export default Accordion;
