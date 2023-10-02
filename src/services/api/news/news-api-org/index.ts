import { NewsApiOrgClient } from '@/services/api/news/news-api-org/NewsApiOrgClient';
import { config } from '@/services/config';

export const newsApiOrgClient = new NewsApiOrgClient(config.newsApiOrgApiKey);
