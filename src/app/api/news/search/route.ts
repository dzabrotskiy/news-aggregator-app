import { searchNews } from '@/services/api/news';
import { SearchNewsParams } from '@/services/api/news/types';
import { parseQuery } from '@/utils/parseQuery';

export async function GET(request: Request) {
  const { sources, q, category, fromDate, toDate } =
    parseQuery<SearchNewsParams>(request.url);

  const news = await searchNews({ sources, q, category, fromDate, toDate });

  return Response.json(news);
}
