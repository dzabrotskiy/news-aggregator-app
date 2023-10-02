import { axios } from '@/services/api/axios';
import { Sources } from '@/services/api/news/constants';
import { News } from '@/types/news';

import { useQuery } from '@tanstack/react-query';
import qs from 'query-string';

type GetNewsFeedParams = {
  sources: Sources[];
};

export function useNewsFeedQuery({ sources }: GetNewsFeedParams) {
  return useQuery(['news-feed', sources], async () => {
    const queryString = qs.stringify({ sources });

    const { data } = await axios.get<News[]>(`/api/news/feed?${queryString}`);

    return data;
  });
}
