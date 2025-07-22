export type AccordionProps = {
  data: AccordionItem[];
  expanded?: "expand" | "click";
  isIcon?: boolean;
};

export type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};
