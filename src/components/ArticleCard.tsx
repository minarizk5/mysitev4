import Link from 'next/link';
import Image from 'next/image';
import { ArticleListItem } from '@/types/article';

type ArticleCardProps = ArticleListItem;

export default function ArticleCard({ title, description, date, slug, coverImage }: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="block h-full">
      <article className="overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
        <div className="relative w-full h-48">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-white/10" />
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
          <p className="text-gray-300 mb-4 flex-1 line-clamp-3">{description}</p>
          <time className="text-sm text-gray-400">{date}</time>
        </div>
      </article>
    </Link>
  );
}
