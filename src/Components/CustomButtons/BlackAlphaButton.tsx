import type { ReactNode } from "react";

type propstype = {
  handleclick: () => void;
  extraclassname?: string;
  text: ReactNode;
};
const BlackAlphaButton = ({
  handleclick,
  extraclassname,
  text,
}: propstype): ReactNode => {
  return (
    <>
      <button
        onClick={handleclick}
        className={`bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center border border-white/20 cursor-pointer ${extraclassname}`}
      >
        {text}
      </button>
    </>
  );
};

export { BlackAlphaButton };
