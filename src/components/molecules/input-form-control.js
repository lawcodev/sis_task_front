import React, { useState, useEffect } from "react";
import { Input, Label } from "../atoms";

export default function (props) {
  const {
    className,
    children,
    matchName,
    type = "text",
    value = "",
    error,
    onChange,
    label = true,
    ...rest
  } = props;
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (rest.required && !value) {
      setMessage("*Requerido");
      return;
    }
    if (rest.minLength && value.length <= rest.minLength) {
      setMessage(`*Mínimo ${rest.minLength} caracteres`);
      return;
    }
    if (rest.maxLength && value.length >= rest.maxLength) {
      setMessage(`*Máximo ${rest.maxLength} caracteres`);
      return;
    }
    if (rest.min && value < rest.min) {
      setMessage(`*Valor mínimo ${rest.min}`);
      return;
    }
    setMessage("");
  }, [rest.required, rest.minLength, rest.maxLength, value, rest.min]);

  return (
    <div className={className}>
      {label && <Label children={children} htmlFor={matchName} />}
      <Input
        type={type}
        id={matchName}
        name={matchName}
        value={type === "number" ? parseFloat(value).toFixed(2) : value}
        onChange={onChange}
        {...rest}
      />
      <div className="invalid-feedback">{message}</div>
    </div>
  );
}