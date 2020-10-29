import React, { useState, useEffect } from 'react';
import TaskList from './list';
import FilterFormControl from './filter'
import { ServiceGetByDateFinishTask } from '../../../services/task/services-task';
import { ServiceGetAllTypes } from '../../../services/type/service-type';
import { getValueMonth, getYear } from '../../../utils/general-functions';
import { Modal } from "../../molecules/";
import Form from './form';

function useGetAllTypes() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    async function getAllTypes() {
      let types = await ServiceGetAllTypes();
      setTypes(types.types);
    }
    getAllTypes();
  }, [])
  return {types}
}

export default function Manager(props) {
  const {types} = useGetAllTypes(props);
  const [taksFilter, setTaskFilter] = useState([]);
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState({})
  const [typeModal, setTypeModal] = useState('')
  //Capturamos valor para filtrar las tareas
  const handleSelect = async (e) => {
    console.log(e);
    let param = getYear() + getValueMonth(e.label);
    let filterList = await ServiceGetByDateFinishTask(param);
    setTaskFilter(filterList.tasks);
  }
  //Crear
  const handleCreate = (e) => {
    setModal(true);
    setTypeModal('new');
  }
  //Actualizar
  const handleUpdate = (e, task) => {
    e.preventDefault();
    setTask(task);
    setModal(true);
    setTypeModal('update');
  }
  const handleClose = (e) => {
    setModal(false);
    setTypeModal('')
  }
  return(
    <>
      <FilterFormControl 
        handleSelect={handleSelect} 
        handleCreate={handleCreate}
      />
      <TaskList 
        tasks={taksFilter}
        handleUpdate={(e, task) => handleUpdate(e, task)}
        handleClose={handleClose}
       />
      {
        taksFilter.length === 0 ?
        <div className="text-center">
          Datos no encontrados...
        </div>
        : ''
      }
      {
        modal && typeModal === 'new' && (
          <Modal
            title= 'Crear nueva tarea'
            size={"modal-lg"}
            onClose={handleClose}
          >
          </Modal>
        )
      }
      {
        modal && typeModal === 'update' && (
          <Modal
            title= 'Actualizar tarea'
            size={'modal-lg'}
            onClose={handleClose}
          >
            <Form
              task={task}
              types={types}
            />
          </Modal>
        )
      }
    </>
  )
}
