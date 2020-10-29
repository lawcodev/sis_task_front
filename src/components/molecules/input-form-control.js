import React, { useState, useEffect } from "react";
import { Input, Label } from "../atoms";

export default function (props) {
  const {
    className,
    children,
    matchName,
    type = "text",
    defaultValue = "",
    error,
    onChange,
    label = true,
    ...rest
  } = props;
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (rest.required && !defaultValue) {
      setMessage("*Requerido");
      return;
    }
    if (rest.minLength && defaultValue.length <= rest.minLength) {
      setMessage(`*Mínimo ${rest.minLength} caracteres`);
      return;
    }
    if (rest.maxLength && defaultValue.length >= rest.maxLength) {
      setMessage(`*Máximo ${rest.maxLength} caracteres`);
      return;
    }
    if (rest.min && defaultValue < rest.min) {
      setMessage(`*Valor mínimo ${rest.min}`);
      return;
    }
    setMessage("");
  }, [rest.required, rest.minLength, rest.maxLength, defaultValue, rest.min]);

  return (
    <div className={className}>
      {label && <Label children={children} htmlFor={matchName} />}
      <Input
        type={type}
        id={matchName}
        name={matchName}
        defaultValue={type === "number" ? parseFloat(defaultValue).toFixed(2) : defaultValue}
        onChange={onChange}
        // {...rest}
      />
      <div className="invalid-feedback">{message}</div>
    </div>
  );
}