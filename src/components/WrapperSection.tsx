import React from "react";

const WrapperSection = ({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className="flex flex-col gap-[40px] px-[16px] lg:px-[60px] py-[40px]"
    >
      {children}
    </section>
  );
};

export default WrapperSection;
