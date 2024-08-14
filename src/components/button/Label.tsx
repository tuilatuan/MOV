import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="rounded-5 border border-[#498B00] bg-whiteF7 px-[10px] py-[5px] font-bevietnam text-[13px] font-bold uppercase text-[#498B00]">
      {children}
    </span>
  );
};

export default Label;
