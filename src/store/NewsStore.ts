import { Sources } from '@/services/api/news/constants';

import { create } from 'zustand';

type NewsStore = {
  sources: Sources[];
  isSearchModalOpen: boolean;
  fromDate?: Date;
  toDate?: Date;

  setSelectedSources(selectedSources: Sources[]): void;
  setSearchModalOpened(isSearchModalOpen: boolean): void;
  setFromDate(date: Date): void;
  setToDate(date: Date): void;
};

export const useNewsStore = create<NewsStore>((setState, getState, store) => ({
  sources: [Sources.THE_GUARDIAN, Sources.NY_TIMES, Sources.NEWS_API_ORG],
  isSearchModalOpen: false,

  setSelectedSources(sources: Sources[]) {
    setState({ sources });
  },
  setSearchModalOpened(isSearchModalOpen: boolean) {
    setState({ isSearchModalOpen });
  },
  setFromDate(fromDate: Date) {
    setState({ fromDate });
  },
  setToDate(toDate: Date) {
    setState({ toDate });
  },
}));
