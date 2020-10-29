import { Uri_GetAllType } from '../../api/type/api-type';
import { EntityGetAll } from '../../utils/api-rest';

export async function ServiceGetAllTypes() {
  return await EntityGetAll(Uri_GetAllType);
}