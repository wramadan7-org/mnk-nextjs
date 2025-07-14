"use client";
import Image from "next/image";
import XMark from "@/assets/icons/xmark.svg";
import PlusMark from "@/assets/icons/plusmark.svg";
import { useState } from "react";
import { AccordionProps } from "@/types/accordionType";

export default function AccordionComponent({
  data,
  isExpanded,
  isIcon,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // default open first

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col">
      {data.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <button
            key={`accordion-${item.id}`}
            type="button"
            onClick={() => isExpanded && toggleAccordion(index)}
            className={`grid grid-cols-12 py-5 ${
              index !== data?.length - 1 ? "border-b border-gray-300" : ""
            } cursor-pointer text-left`}
          >
            <div className="col-span-12 sm:col-span-1 flex items-start justify-start sm:items-center sm:justify-center">
              <p className="text-gray-500 font-bold text-3xl">0{index + 1}</p>
            </div>

            <div className="col-span-12 sm:col-span-11 grid grid-cols-12 gap-2">
              <div
                className={`${
                  isIcon
                    ? "col-span-10 sm:col-span-11"
                    : "col-span-11 sm:col-span-12"
                } flex flex-col gap-3`}
              >
                <h1 className="text-2xl font-bold text-black">
                  {item.question}
                </h1>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 mt-1">{item.answer}</p>
                </div>
              </div>

              {isIcon && (
                <div className="col-span-2 sm:col-span-1 flex items-start justify-center">
                  <div
                    className={`shadow w-fit h-fit rounded-full border ${
                      isOpen
                        ? "border-black bg-black p-3"
                        : "border-gray-300 bg-gray-300 p-3"
                    }`}
                  >
                    <Image
                      src={isOpen ? XMark : PlusMark}
                      width={20}
                      height={20}
                      alt={isOpen ? "Close" : "Expand"}
                      className="w-3 h-3 sm:w-5 sm:h-5"
                    />
                  </div>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
