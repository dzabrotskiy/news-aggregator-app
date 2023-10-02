import { getNewsFeed } from '@/services/api/news';
import { GetNewsFeedParams } from '@/services/api/news/types';
import { parseQuery } from '@/utils/parseQuery';

export async function GET(request: Request) {
  const { sources } = parseQuery<GetNewsFeedParams>(request.url);

  const news = await getNewsFeed({ sources });

  return Response.json(news);
}
