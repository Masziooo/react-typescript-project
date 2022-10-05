export interface AccordionProps {
  index: number;
  num: string;
  visibleContent: string;
  hiddenContent: string;
  className?: string;
}

export type AccordionType = {
  visibleContent: string;
  hiddenContent: string;
};
