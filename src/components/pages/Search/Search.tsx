import { Layout } from '@/components/layouts/Layout';
import { NewsFilter } from '@/components/widgets/NewsFilter';
import { NewsList } from '@/components/widgets/NewsList';
import { SearchModal } from '@/components/widgets/SearchModal';
import { useSearchNewsQuery } from '@/hooks/useSearchNewsQuery';
import { useSearchQueryParams } from '@/hooks/useSearchQueryParams';
import { useNewsStore } from '@/store/NewsStore';

import { Spacer } from '@nextui-org/spacer';

export function Search() {
  const q: string = useSearchQueryParams('q');
  const { sources, fromDate, toDate } = useNewsStore();

  const { data: news, isLoading } = useSearchNewsQuery({
    sources,
    q,
    fromDate,
    toDate,
  });

  return (
    <Layout>
      <SearchModal />
      <NewsFilter showDateRangePicker={true} />
      <Spacer y={10} />
      <div className="text-2xl">{`Your Search "${q}"`}</div>
      <NewsList news={news} isLoading={isLoading} />
    </Layout>
  );
}
