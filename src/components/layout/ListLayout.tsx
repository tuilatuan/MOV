import React from "react";

const ListLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="container py-[40px] sm:py-[64px]">
      <h2 className="heading mb-[62px] text-center text-h1small sm:mb-[129px] sm:text-h1">
        {title}
      </h2>

      <div>{children}</div>
    </div>
  );
};

export default ListLayout;
