import React from "react";

function Input({
  id = "",
  name = "",
  value = "",
  type = "text",
  className = "form-control",
  max,
  min,
  setFocus,
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      defaultValue={value}
      className={className}
      max={max}
      min={min}
      setFocus={setFocus}
      {...props}
    />
  );
}

export default Input;
