import { BASE_URL_DEV } from '../../config/config';

export const Uri_GetAllTask = `${BASE_URL_DEV}/tasks`;
export const Uri_GetTaskByDateFinish = (param) => `${BASE_URL_DEV}/task/${param}`;