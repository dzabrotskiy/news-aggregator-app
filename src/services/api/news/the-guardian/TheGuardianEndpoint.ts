import { Sources } from '@/services/api/news/constants';
import { fetchRequest } from '@/services/api/news/fetchRequest';
import { EndpointNames } from '@/services/api/news/the-guardian/constants';
import { TheGuardianNewsResponse } from '@/services/api/news/the-guardian/types';
import { NewsClient } from '@/services/api/news/types';
import { News } from '@/types/news';

import qs from 'query-string';

export class TheGuardianEndpoint
  implements NewsClient<TheGuardianNewsResponse>
{
  readonly endpointName: string;
  readonly apiKey: string;
  readonly baseURL: string;

  constructor(endpointName: EndpointNames, key: string) {
    this.endpointName = endpointName;
    this.apiKey = key;
    this.baseURL = 'https://content.guardianapis.com';
  }

  async makeRequest(url: string) {
    return fetchRequest(this.baseURL, url, this.mapNews);
  }

  public async search(q?: string, filters: Record<string, unknown> = {}) {
    const queryString = qs.stringify({ q, 'api-key': this.apiKey, ...filters });

    const url = `/${this.endpointName}?${queryString}`;

    return this.makeRequest(url);
  }

  public mapNews(news: TheGuardianNewsResponse): News[] {
    return (
      news.response?.results?.map(content => ({
        source: Sources.THE_GUARDIAN,
        id: content.id,
        title: content.webTitle,
        category: content.pillarName,
        publishedAt: content.webPublicationDate,
        url: content.webUrl,
      })) ?? []
    );
  }
}
