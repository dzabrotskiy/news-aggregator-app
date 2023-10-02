import { Layout } from '@/components/layouts/Layout';
import { NewsFilter } from '@/components/widgets/NewsFilter';
import { NewsList } from '@/components/widgets/NewsList';
import { SearchModal } from '@/components/widgets/SearchModal';
import { useNewsFeedQuery } from '@/hooks/useNewsFeedQuery';
import { useNewsStore } from '@/store/NewsStore';

export function Home() {
  const { sources } = useNewsStore();
  const { data: newsList, isLoading } = useNewsFeedQuery({ sources });

  return (
    <Layout>
      <NewsFilter />
      <NewsList news={newsList} isLoading={isLoading} />
      <SearchModal />
    </Layout>
  );
}
