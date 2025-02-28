import { NextResponse } from 'next/server';
import { TwitterApi } from 'twitter-api-v2';

// Environment variables for Twitter API
const TWITTER_API_KEY = process.env.TWITTER_API_KEY;
const TWITTER_API_SECRET = process.env.TWITTER_API_SECRET;
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN;
const TWITTER_ACCESS_SECRET = process.env.TWITTER_ACCESS_SECRET;
const TWITTER_USER_ID = process.env.TWITTER_USER_ID;

export async function GET() {
  if (!TWITTER_API_KEY || !TWITTER_API_SECRET || !TWITTER_ACCESS_TOKEN || !TWITTER_ACCESS_SECRET || !TWITTER_USER_ID) {
    return NextResponse.json(
      { error: 'Twitter API credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const client = new TwitterApi({
      appKey: TWITTER_API_KEY,
      appSecret: TWITTER_API_SECRET,
      accessToken: TWITTER_ACCESS_TOKEN,
      accessSecret: TWITTER_ACCESS_SECRET,
    });

    const tweets = await client.v2.userTimeline(TWITTER_USER_ID, {
      max_results: 5,
      'tweet.fields': ['created_at', 'public_metrics'],
    });

    const formattedTweets = tweets.data.data.map((tweet: any) => ({
      id: tweet.id,
      content: tweet.text,
      date: new Date(tweet.created_at).toLocaleDateString(),
      likes: tweet.public_metrics.like_count,
      retweets: tweet.public_metrics.retweet_count,
    }));

    return NextResponse.json(formattedTweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tweets from Twitter' },
      { status: 500 }
    );
  }
}