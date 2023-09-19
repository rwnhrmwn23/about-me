import React from "react";

const ScrollLink = ({ children, ...props }: any) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });

      if (props?.onClick) {
        props?.onClick(e);
      }
    }
  };

  return (
    <a {...props} onClick={handleScroll}>
      {children}
    </a>
  );
};
export default ScrollLink;
