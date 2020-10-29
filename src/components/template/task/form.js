import React from 'react';
import { 
  InputFormControl,
  // SelectedFormControl
} from '../../molecules';
import Select, { components } from 'react-select';
export default function Form({
  task,
  types
}) {
  const Option = props => {
    return (
      <span title={props.data.nombre}>
        <components.Option {...props} />
      </span>
    );
  };
  return(
    <div className="container px-0">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <InputFormControl 
              children={'Título'}
              matchName="title"
              className={'col-md-12'}
              defaultValue={task.title}
            />
            <InputFormControl 
              children={'Fecha inicio'}
              matchName="start"
              className={'col-md-6'}
              type='date'
              defaultValue={task.start}
            />
            <InputFormControl 
              children={'Fecha fin'}
              matchName="end"
              className={'col-md-6'}
              type='date'
              defaultValue={task.end}
            />
            <InputFormControl 
              children={'Porcentaje plan.'}
              matchName="percentage_plan"
              className={'col-md-3'}
              type='number'
              defaultValue={task.percentage_plan}
            />
            {/* <SelectedFormControl
              children="Estado"
              className="browser-default custom-select"
              classNameDiv="col-md-6"
              options={types}
              value={task.type.type_id}
              // onChange={handleSelect}
              required
            /> */}
            <div className="col-md-6" style={{marginTop: '0.5em'}}>
              <br />
              <Select
                defaultValue={types.filter(type => type.label === task.type.label)}
                options={types}
                // onChange={capturarUnidadDeMedida}
                placeholder='Estado tarea'
                components={{ Option }}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row" style={{float: "right"}}>
            <div className="col-md-12">
              <button className="btn btn-success">Actualizar tarea</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}