import { Uri_GetAllTask, Uri_GetTaskByDateFinish } from '../../api/task/api-task';
import { EntityGetAll } from '../../utils/api-rest';

export async function ServiceGetAllTasks() {
  return await EntityGetAll(Uri_GetAllTask);
}
export async function ServerGetByDateFinishTask(param) {
  return await EntityGetAll(Uri_GetTaskByDateFinish(param));
}