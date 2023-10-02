import { useSearchParams } from 'next/navigation';

export function useSearchQueryParams(key: string) {
  const searchParams = useSearchParams();

  return searchParams.get(key) ?? '';
}
