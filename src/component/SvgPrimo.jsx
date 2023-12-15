import React from "react";

const SvgPrimo = ({ onClick }) => {
  return (
    <span className=" flex flex-row border-none text-[#b8b8b8] hover:text-[#f5f5f5] focus:text-[#fff] transition-all">
      <svg
    className=' outline-none'
      onClick={onClick}
      role="button"
      tabIndex="0" 
      viewBox="0 0 24 24"
      fill="white"
      height={20}
    >
      <path d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"></path>
    </svg>
    <a href="" className=" ml-5"> Search</a>
    </span>
    
  );
};

export default SvgPrimo;