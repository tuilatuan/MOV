import React from "react";

const Partners = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 902:flex-row 902:justify-between">
      <h3 className="heading text-h3bl">Đối tác của MOV</h3>
      <div className="flex flex-wrap justify-center gap-5 902:flex-nowrap 902:gap-[70px]">
        <div className="flex items-center justify-center">
          <img src="/imgs/logo-autism.svg" alt="logo-partner" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/imgs/logo-fulbright.svg" alt="logo-partner" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/imgs/logo-ibao.svg" alt="logo-partner" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/imgs/logo-a365.svg" alt="logo-partner" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/imgs/logo-ccihp.svg" alt="logo-partner" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
