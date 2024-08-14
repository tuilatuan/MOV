import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-custom-gradient pt-40">{children}</div>;
};

export default layout;
