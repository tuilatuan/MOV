import React from "react";

const Tabs = () => {
  return (
    <div className="scrollbar-none mx-[calc(15px*-1)] mb-[27px] flex flex-nowrap justify-start gap-2 overflow-x-scroll md:mx-auto md:flex-wrap md:justify-center md:gap-5 md:overflow-x-auto">
      <div className="heading trans300 box-border inline-flex cursor-pointer whitespace-nowrap px-[10px] text-h3 normal-case">
        Autism<sup className="align-super text-[60%] leading-[2.5]">(04)</sup>
      </div>
      <div className="heading trans300 box-border inline-flex cursor-pointer whitespace-nowrap px-[10px] text-h3 normal-case opacity-30 hover:opacity-100">
        Behaviour analysis with science
        <sup className="align-super text-[60%] leading-[2.5]">(02)</sup>
      </div>
      <div className="heading trans300 box-border inline-flex cursor-pointer whitespace-nowrap px-[10px] text-h3 normal-case opacity-30 hover:opacity-100">
        Academic report
        <sup className="align-super text-[60%] leading-[2.5]">(03)</sup>
      </div>
      <div className="heading trans300 box-border inline-flex cursor-pointer whitespace-nowrap px-[10px] text-h3 normal-case opacity-30 hover:opacity-100">
        Scientific proven
        <sup className="align-super text-[60%] leading-[2.5]">(01)</sup>
      </div>
    </div>
  );
};

export default Tabs;
