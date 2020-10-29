import React from 'react'
import RowListTable from './row-list-table'

export default function List({tasks, handleUpdate}) {
  return(
    <div className="table table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th colSpan="7" className="font-weight-bold" style={{background: '#144980', color: 'white'}}>
              ACTIVIDADES ({tasks.length})
            </th>
          </tr>
          <tr style={{background: '#EAF4FF'}}>
            {/* <th>#Sem.</th> */}
            <th className="text-center">
              N° <br />
              <small>Item</small>
            </th>
            <th className="text-center">
              Actividad <br />
              <small>(Detalle de la actividad)</small>
            </th>
            <th className="text-center">
              Fecha inicio <br />
              <small>(dd/mm/yyyy)</small>
            </th>
            <th className="text-center">
              Fecha fin <br />
              <small>(dd/mm/yyyy)</small>
            </th>
            <th className="text-center">
              Estado <br />
              <small>
                (Pendiente, Retrazado ...)
              </small>
            </th>
            <th className="text-center">
              %Plan <br />
              <small>(Porc... plan)</small>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task, index) => {
              return(
                <RowListTable 
                  task={task} 
                  index={index + 1} 
                  key={task.task_id} 
                  handleUpdate={e => handleUpdate(e, task)} 
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}