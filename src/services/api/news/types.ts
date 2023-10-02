import { Sources } from '@/services/api/news/constants';
import { News } from '@/types/news';

export type SearchNewsParams = {
  sources?: Sources[];
  q: string;
  category?: string;
  fromDate?: Date | string;
  toDate?: Date | string;
};

export type GetNewsFeedParams = {
  sources?: Sources[];
  categories?: string[];
  authors?: string[];
};

export interface NewsClient<OriginalNews = any> {
  apiKey: string;
  baseURL: string;
  mapNews(news: OriginalNews): News[];
  makeRequest(url: string): Promise<News[]>;
  search(q: string, filters?: Record<string, unknown>): Promise<News[]>;
}
