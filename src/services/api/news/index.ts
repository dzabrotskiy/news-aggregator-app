import { Sources } from '@/services/api/news/constants';
import { newsApiOrgClient } from '@/services/api/news/news-api-org';
import { nyTimesClient } from '@/services/api/news/ny-times';
import { theGuardianClient } from '@/services/api/news/the-guardian';
import { GetNewsFeedParams, SearchNewsParams } from '@/services/api/news/types';
import { News } from '@/types/news';

export async function getNewsFeed({
  sources,
}: GetNewsFeedParams): Promise<News[]> {
  // we can add some additional logic here...
  const promises = [
    sources?.includes(Sources.NEWS_API_ORG) &&
      newsApiOrgClient.getTopHeadlines(),
    sources?.includes(Sources.NY_TIMES) &&
      nyTimesClient.getMostViewedArticles(),
    sources?.includes(Sources.THE_GUARDIAN) &&
      theGuardianClient.content.search(),
  ].filter(Boolean);

  return (await Promise.all(promises)).flat();
}

export async function searchNews({
  sources,
  q,
  fromDate,
  toDate,
}: SearchNewsParams): Promise<News[]> {
  const promises = [
    sources?.includes(Sources.NEWS_API_ORG) &&
      newsApiOrgClient.search(q, { from: fromDate, to: toDate }),
    // NOTE: Unfortunately, NY Times doesn't have proper searching endpoints
    // sources?.includes(Sources.NY_TIMES) && nyTimesClient.search(q),
    sources?.includes(Sources.THE_GUARDIAN) &&
      theGuardianClient.content.search(q, {
        'from-date': fromDate,
        'to-date': toDate,
      }),
  ].filter(Boolean);

  return (await Promise.all(promises)).flat();
}
