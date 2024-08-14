import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-custom-gradient">{children}</div>;
};

export default layout;
