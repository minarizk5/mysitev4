import PageContainer from '@/components/PageContainer';
import ArticleCard from '@/components/ArticleCard';
import { ArticleListItem } from '@/types/article';

const articles: ArticleListItem[] = [
  {
    title: 'Understanding Quantum Mechanics',
    description: 'Quantum mechanics is the theoretical framework that underpins our understanding of the universe',
    date: 'June 11, 2024',
    slug: 'article1'
  },
  {
    title: 'The Future of AI',
    description: 'Artificial Intelligence is transforming every aspect of our lives...',
    date: 'September 19, 2024',
    slug: 'article2'
  },
  {
    title: 'Complete Guide to Ubuntu Linux',
    description: 'A comprehensive guide to installing and getting started with Ubuntu Linux',
    date: 'February 22, 2025',
    slug: 'ubuntu-guide'
  }
];

export default function Articles() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-8">Articles</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
    </PageContainer>
  );
}
