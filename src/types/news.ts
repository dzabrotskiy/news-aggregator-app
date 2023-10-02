import { Sources } from '@/services/api/news/constants';

export type News = {
  source?: Sources;
  id?: string | null;
  author?: string | null;
  title?: string;
  description?: string;
  category?: string;
  url?: string | null;
  image?: string;
  publishedAt?: string;
};
