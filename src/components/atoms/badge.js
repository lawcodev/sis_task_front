import React from "react";

export default function Badge(props) {
  const { value, text } = props
  let className;
  switch (value) {
    case 1:
      className = "bg-success text-white";
      break;
    case 2:
      className = "bg-warning text-white";
      break;
    case 3:
      className = "bg-danger text-white";
      break;
    case 4:
      className = "bg-primary text-white";
      break;
    default:
      break;
  }
  return <span className={`badge ${className}`}>{text}</span>;
}
