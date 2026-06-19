import React from "react";

const Loader = ({ className = "" }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className="
          relative flex justify-center items-center aspect-square rounded-full
          w-16 sm:w-20 md:w-24 lg:w-32
          animate-[spin_3s_linear_infinite]
          bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)]

          before:absolute before:aspect-square before:rounded-full
          before:w-[60%]
          before:animate-[spin_2s_linear_infinite]
          before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)]

          after:absolute after:aspect-square after:rounded-full
          after:w-3/4
          after:animate-[spin_3s_linear_infinite]
          after:bg-[conic-gradient(#1e3a8a_0deg,#1e3a8a_180deg,transparent_180deg,transparent_360deg)]
        "
      >
        <span
          className="
            absolute aspect-square rounded-full
            w-[85%]
            animate-[spin_5s_linear_infinite]
            bg-[conic-gradient(#3b82f6_0deg,#3b82f6_180deg,transparent_180deg,transparent_360deg)]
          "
        />
      </div>
    </div>
  );
};

export default Loader;
