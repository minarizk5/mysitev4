export interface Article {
  title: string;
  content: string;
}

export interface ArticleListItem {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export type ArticlesRecord = Record<string, Article>;
