import type { ReactNode } from "react";

type propstype = {
  handleclick: () => void;
  extraclassname?: string;
  text: ReactNode;
};
export const GreenGrediantButton = ({
  handleclick,
  extraclassname,
  text,
}: propstype) => {
  return (
    <button
      onClick={handleclick}
      className={`bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer ${extraclassname}`}
    >
        {text}

    </button>
  );
};