import { axios } from '@/services/api/axios';
import { SearchNewsParams } from '@/services/api/news/types';
import { News } from '@/types/news';

import { useQuery } from '@tanstack/react-query';
import qs from 'query-string';

export function useSearchNewsQuery(params: SearchNewsParams) {
  return useQuery(['news-feed', { ...params }], async () => {
    const searchParams = { ...params };
    if (params.fromDate) {
      searchParams.fromDate = new Date(params.fromDate).toISOString();
    }

    if (params.toDate) {
      searchParams.toDate = new Date(params.toDate).toISOString();
    }

    const queryString = qs.stringify({ ...searchParams });

    const { data } = await axios.get<News[]>(`/api/news/search?${queryString}`);

    return data;
  });
}
