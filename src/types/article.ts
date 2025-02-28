export interface Article {
  title: string;
  content: string;
  coverImage?: string;
}

export interface ArticleListItem {
  title: string;
  description: string;
  date: string;
  slug: string;
  coverImage?: string;
}

export type ArticlesRecord = Record<string, Article>;
