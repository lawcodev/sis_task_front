import React from 'react';
import { Badge } from '../../atoms'
import { 
  InputFormControl,
  // SelectedFormControl
} from '../../molecules';
import Select, { components } from 'react-select';
export default function Form({
  task,
  types,
  typeModal
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
            {
              typeModal === 'update' ?
              <>
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
                  max={100}
                  min={0}
                  defaultValue={task.percentage_plan}
                />
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
                <div className="col-md-3" style={{marginTop: '2.35em'}}>
                  <Badge value={parseInt(task.type.value)} text={task.type.label} />
                </div>
              </>
              : 
              <>
                <InputFormControl 
                  children={'Título'}
                  matchName="title"
                  className={'col-md-12'}
                />
                <InputFormControl 
                  children={'Fecha inicio'}
                  matchName="start"
                  className={'col-md-6'}
                  type='date'
                />
                <InputFormControl 
                  children={'Fecha fin'}
                  matchName="end"
                  className={'col-md-6'}
                  type='date'
                />
                <InputFormControl 
                  children={'Porcentaje plan.'}
                  matchName="percentage_plan"
                  className={'col-md-3'}
                  type='number'
                  max={100}
                  min={0}
                />
                <div className="col-md-6" style={{marginTop: '0.5em'}}>
                  <br />
                  <Select
                    // defaultValue={types.filter(type => type.label === 'Octubre')}
                    options={types}
                    // onChange={capturarUnidadDeMedida}
                    placeholder='Estado tarea'
                    components={{ Option }}
                  />
                </div>
                <div className="col-md-3" style={{marginTop: '2.35em'}}>
                  {/* <Badge value={parseInt(.value)} text={task.type.label} /> */}
                </div>
              </>
            }
          </div>
        </div>
        <div className="card-footer">
          <div className="row" style={{float: "right"}}>
            <div className="col-md-12">
              {
                typeModal === 'new' ?
                <button className="btn btn-success">
                  Crear nueva tarea
                </button>
                :
                <button className="btn btn-success">
                  Actualizar tarea
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}