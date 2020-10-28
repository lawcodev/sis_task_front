import React from "react";

function Select({
  name,
  options,
  className,
  onChange,
  defaultText = "Seleccione...",
}) {
  return (
    <select
      id={name}
      name={name}
      className={`form-select ${className}`}
      onChange={onChange}
    >
      <option children={defaultText} value="" selected="true" disabled="disabled" />
      {options?.map((op) => (
        <option key={op.id} value={op.id}>
          {op.name || op.description || op.code}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  currentValue: 0,
  className: "",
};

export default Select;
