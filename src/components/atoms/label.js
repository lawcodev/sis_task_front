import React from "react";

function Label({ children, htmlFor, className = "", ...props }) {
  return (
    <label
      children={children}
      htmlFor={htmlFor}
      className={className}
      {...props}
    />
  );
}

export default Label;
