import React from 'react'
// import SelectedFormControl from '../../molecules/select-form-control'
import Select, { components } from 'react-select';

export default function Filter({handleSelect, handleCreate, handleClose}) {
  let months = [
    {
      value: 1,
      label: "Enero"
    }, 
    {
      value: 2,
      label: "Febrero"
    }, 
    {
      value: 3,
      label: "Marzo"
    }, 
    {
      value: 4,
      label: "Abril"
    }, 
    {
      value: 5,
      label: "Mayo"
    },
    {
      value: 6,
      label: "Junio"
    },
    {
      value: 7,
      label: "Julio"
    },
    {
      value: 8,
      label: "Agosto"
    },
    {
      value: 9,
      label: "Septiembre"
    },
    {
      value: 10,
      label: "Octubre"
    },
    {
      value: 11,
      label: "Noviembre"
    },
    {
      value: 12,
      label: "Diciembre"
    }
  ]
  const Option = props => {
    return (
      <span title={props.data.nombre}>
        <components.Option {...props} />
      </span>
    );
  };
  return(
    <div className="row mb-3 mt-3">
      {/* <SelectedFormControl
        // children="Mes"
        className="browser-default custom-select"
        classNameDiv="col-md-4"
        options={months}
        onChange={handleSelect}
        required
      /> */}
      <div className="col-md-4">
        <Select
          options={months}
          onChange={handleSelect}
          placeholder='Selecciona mes'
          components={{ Option }}
        />
      </div>
      <div className="col-md-4">
        <button className="btn btn-success" onClick={handleCreate}>
          Crear task
        </button>
      </div>
    </div>
  )
}