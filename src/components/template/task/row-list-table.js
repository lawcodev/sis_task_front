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

export default function RowList({task, index}) {
  return(
    <>
      <tr style={{background: getBackgroundColor(task.diff_days, task.is_pending)}} className="text-center">
        <td>{index}</td>
        <td>
          <span style={{float: 'left'}}>‣ {task.name}</span>
        </td>
        <td>{task.start_date}</td>
        <td>{task.finish_date}</td>
        <td><Badge value={parseInt(task.type.type_id)} text={task.type.name} /></td>
        <td style={{width: '2.5em'}}>{task.percentage_plan}%</td>
      </tr>
    </>
  )
}