import React from "react";
import Tabs from "./Tabs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-custom-gradient pt-20 md:pt-36">
      <div className="container mb-[35px] md:mb-0">
        <h2 className="heading abc mx-auto mb-[27px] w-max text-h2">
          Kiến thức
        </h2>
        <Tabs />
      </div>
      {children}
    </div>
  );
};

export default layout;
