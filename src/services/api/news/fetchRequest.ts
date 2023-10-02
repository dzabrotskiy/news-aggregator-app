import { axios } from '@/services/api/axios';

import { AxiosError } from 'axios';

export async function fetchRequest<ResponseType>(
  baseURL: string,
  path: string,
  mapData: (response: any) => any,
) {
  try {
    const { data } = await axios.get<ResponseType>(path, {
      baseURL: baseURL,
    });

    return mapData(data);
  } catch (error: any) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }

    throw new Error(error);
  }
}
