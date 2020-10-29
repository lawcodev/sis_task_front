import React from 'react'
import { Badge } from '../../atoms'

function getBackgroundColor(diff_days, is_pending) {
  let diff_days_validate = ''
  if(parseInt(diff_days) > 0) {
    diff_days_validate = '#FFDED9';
  } 
  if(parseInt(is_pending) === 1) {
    diff_days_validate = '#FFECB2';
  }
  return diff_days_validate;
}

export default function RowList({task, index, handleUpdate}) {
  return(
    <tr style={{background: getBackgroundColor(task.diff_days, task.is_pending)}} className="text-center">
      <td>{index}</td>
      <td>
        <span style={{float: 'left'}}>‣ {task.title}</span>
      </td>
      <td>{task.start}</td>
      <td>{task.end}</td>
      <td><Badge value={parseInt(task.type.value)} text={task.type.label} /></td>
      <td style={{width: '2.5em'}}>{task.percentage_plan}%</td>
      <td>
        <button className="btn btn-success" onClick={handleUpdate} title={'Editar tarea'}>
          <svg width={16} height={16} viewBox="0 0 16 16" className="bi bi-box-arrow-in-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"/>
            <path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"/>
          </svg>
        </button>
      </td>
    </tr>
  )
}