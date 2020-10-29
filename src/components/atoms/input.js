import React from "react";

function Input({
  id = "",
  name = "",
  value = "",
  type = "text",
  className = "form-control",
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      defaultValue={value}
      className={className}
      {...props}
    />
  );
}

export default Input;
