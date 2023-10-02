export type NewsAPIOrgNewsResponse = {
  status?: string;
  totalResults?: number;
  articles?: Article[];
};

export type Article = {
  source?: Source;
  author?: null | string;
  title?: string;
  description?: string;
  url?: string | null;
  urlToImage?: string;
  publishedAt?: string;
  content?: null | string;
};

export type Source = {
  id?: null | string;
  name?: string;
};
