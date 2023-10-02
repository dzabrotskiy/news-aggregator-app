import { Sources } from '@/services/api/news/constants';
import { fetchRequest } from '@/services/api/news/fetchRequest';
import { NewsAPIOrgNewsResponse } from '@/services/api/news/news-api-org/types';
import { NewsClient } from '@/services/api/news/types';
import { News } from '@/types/news';

import qs from 'query-string';

export class NewsApiOrgClient implements NewsClient<NewsAPIOrgNewsResponse> {
  readonly apiKey: string;
  readonly baseURL: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseURL = 'https://newsapi.org/v2/';
  }

  makeRequest(url: string): Promise<News[]> {
    try {
      return fetchRequest(this.baseURL, url, this.mapNews);
    } catch (error) {
      return Promise.resolve([]);
    }
  }

  getTopHeadlines() {
    const queryString = qs.stringify({
      apiKey: this.apiKey,
      language: 'en',
    });

    const url = `/top-headlines?${queryString}`;

    return this.makeRequest(url);
  }

  search(q: string, filters?: Record<string, unknown>) {
    const queryString = qs.stringify({
      apiKey: this.apiKey,
      language: 'en',
      q,
      ...filters,
    });

    const url = `/everything?${queryString}`;

    return this.makeRequest(url);
  }

  mapNews(news: NewsAPIOrgNewsResponse): News[] {
    return (
      news.articles?.map(content => ({
        source: Sources.NEWS_API_ORG,
        id: content.url,
        title: content.title,
        description: content.description,
        url: content.url,
        image: content.urlToImage,
        publishedAt: content.publishedAt,
        author: content?.author,
      })) ?? []
    );
  }
}
