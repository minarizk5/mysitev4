import Link from 'next/link';
import { ArticleListItem } from '@/types/article';

type ArticleCardProps = ArticleListItem;

export default function ArticleCard({ title, description, date, slug }: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="block">
      <article className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <time className="text-sm text-gray-400">{date}</time>
      </article>
    </Link>
  );
}
