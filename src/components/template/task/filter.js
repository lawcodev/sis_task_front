import React from 'react'
import SelectedFormControl from '../../molecules/select-form-control'

export default function Filter({handleSelect, handleCreate, handleClose}) {
  let months = [
    {
      id: 1,
      name: "Enero"
    }, 
    {
      id: 2,
      name: "Febrero"
    }, 
    {
      id: 3,
      name: "Marzo"
    }, 
    {
      id: 4,
      name: "Abril"
    }, 
    {
      id: 5,
      name: "Mayo"
    },
    {
      id: 6,
      name: "Junio"
    },
    {
      id: 7,
      name: "Julio"
    },
    {
      id: 8,
      name: "Agosto"
    },
    {
      id: 9,
      name: "Septiembre"
    },
    {
      id: 10,
      name: "Octubre"
    },
    {
      id: 11,
      name: "Noviembre"
    },
    {
      id: 12,
      name: "Diciembre"
    }
  ]
  return(
    <div className="row mb-3 mt-3">
      <SelectedFormControl
        // children="Mes"
        className="browser-default custom-select"
        classNameDiv="col-md-4"
        options={months}
        defaultValue={10}
        onChange={handleSelect}
        required
      />
      <div className="col-md-4">
        <button className="btn btn-success" onClick={handleCreate}>
          Crear task
        </button>
      </div>
    </div>
  )
}