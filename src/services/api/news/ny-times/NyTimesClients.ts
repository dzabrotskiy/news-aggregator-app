import { Sources } from '@/services/api/news/constants';
import { fetchRequest } from '@/services/api/news/fetchRequest';
import { NYTimesNewsResponse } from '@/services/api/news/ny-times/types';
import { NewsClient } from '@/services/api/news/types';
import { News } from '@/types/news';

import qs from 'query-string';

export class NyTimesClients implements NewsClient<NYTimesNewsResponse> {
  readonly apiKey: string;
  readonly baseURL: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.nytimes.com';
  }

  async makeRequest(url: string) {
    return fetchRequest(this.baseURL, url, this.mapNews);
  }

  public getMostViewedArticles() {
    const url = `/svc/mostpopular/v2/viewed/30.json?api-key=${this.apiKey}`;

    return this.makeRequest(url);
  }

  public search(q: string) {
    const queryString = qs.stringify({
      'api-key': this.apiKey,
      q,
    });
    const url = `/svc/search/v2/articlesearch.json?${queryString}`;

    return this.makeRequest(url);
  }

  mapNews(news: NYTimesNewsResponse): News[] {
    return (
      news.results?.map(content => ({
        source: Sources.NY_TIMES,
        id: content.uri,
        title: content.title,
        url: content.url,
        category: content.subsection,
        description: content.abstract,
        image: content.media?.[0]?.['media-metadata']?.[0]?.url,
      })) ?? []
    );
  }
}
