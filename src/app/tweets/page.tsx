import PageContainer from '@/components/PageContainer';

const tweets = [
  {
    id: '1',
    content: 'Example tweet 1',
    date: 'February 22, 2025',
    likes: 42,
    retweets: 12
  },
  // Add more tweets here
];

export default function Tweets() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-8">My Tweets</h1>
      <div className="space-y-6">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="p-6 rounded-lg bg-white/5">
            <p className="text-lg mb-3">{tweet.content}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <time>{tweet.date}</time>
              <span>{tweet.likes} likes</span>
              <span>{tweet.retweets} retweets</span>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
