import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-custom-gradient pt-20 md:pt-36">{children}</div>
  );
};

export default layout;
