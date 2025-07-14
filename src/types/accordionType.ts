export type AccordionProps = {
  data: AccordionItem[];
  isExpanded?: boolean;
  isIcon?: boolean;
};

export type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};
