import React, { useState } from 'react';
import List from './list';
import FilterFormControl from './filter'
import { ServerGetByDateFinishTask } from '../../../services/task/services-task'
import { fillWithZeros, getYear } from '../../../utils/general-functions'

// function useGetAllTask() {
//   const [tasks, setTasks] = useState([]);
//   useEffect(() => {
//     async function getAllTask() {
//       let tasks = await ServiceGetAllTasks();
//       setTasks(tasks);
//     }
//     getAllTask();
//   }, [])
//   return {tasks}
// }

export default function Manager(props) {
  // const {tasks} = useGetAllTask(props);
  const [taksFilter, setTaskFilter] = useState([]);

  const handleSelect = async (e) => {
    let param = getYear() + fillWithZeros(e.target.value);
    let filterList = await ServerGetByDateFinishTask(param);
    setTaskFilter(filterList.tasks);
  }
  
  return(
    <>
      <FilterFormControl 
        handleSelect={handleSelect} 
      />
      <List tasks={taksFilter} />
      {
        taksFilter.length === 0 ?
        <div className="text-center">
          Datos no encontrados...
        </div>
        : ''
      }
    </>
  )
}
