import React, { useState, useEffect } from "react";
import { Select } from "../atoms";

export default function (props) {
  const {
    className,
    children,
    matchName,
    defaultValue = "",
    error,
    options,
    onChange,
    classNameDiv,
    ...rest
  } = props;
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (rest.required && !defaultValue) {
      setMessage("*Requerido");
      return;
    }
    setMessage("");
  }, [rest.required, defaultValue]);

  return (
    <div className={classNameDiv}>
      <Select
        id={matchName}
        name={matchName}
        currentValue={defaultValue}
        options={options}
        onChange={onChange}
        className={className}
        {...rest}
      />
      <div className="invalid-feedback">{message}</div>
    </div>
  );
}
