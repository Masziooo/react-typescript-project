import { AccordionType } from "../../atoms/Accordion/Accordion.models";

export interface AccordionListProps {
  accordions: {
    title: string;
    details: AccordionType[];
  };
}
