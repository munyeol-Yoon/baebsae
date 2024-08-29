import { ReactNode, useState } from "react";
import ExpandMore from "./SVG/ExpandMore";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-5 overflow-hidden transition-all duration-300 ease-in-out border border-gray-200 rounded-lg">
      <div
        className={`flex items-center justify-between bg-gray-100 px-4 py-2 cursor-pointer ${
          isOpen ? "text-gray-900" : "text-gray-600"
        }`}
        onClick={toggleAccordion}
      >
        <p className="text-base font-medium">{title}</p>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ExpandMore fill="#e88ca6" />
        </span>
      </div>
      {isOpen && (
        <div className="px-5 py-3 text-sm text-justify bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
