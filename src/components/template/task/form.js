import React, { useRef } from 'react';
import { 
  InputFormControl,
  SelectedFormControl
} from '../../molecules';

export default function Form({
  task,
  types
}) {
  console.log(types);
  const handleSubmit = (e) => {

  }
  const form = useRef(null);
  return(
    <div className="container px-0">
      <form ref={form} onSubmit={handleSubmit} noValidate>
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
               <SelectedFormControl
                children="Estado"
                className="browser-default custom-select"
                classNameDiv="col-md-6"
                options={types}
                // onChange={handleSelect}
                required
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}