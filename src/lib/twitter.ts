import { TwitterApi } from 'twitter-api-v2';
import type { Bookmark } from '../types';

class TwitterService {
  private client: TwitterApi;

  constructor() {
    const bearerToken = import.meta.env.VITE_TWITTER_BEARER_TOKEN;
    if (!bearerToken) {
      throw new Error('Twitter bearer token is not configured');
    }
    this.client = new TwitterApi(bearerToken);
  }

  async getBookmarks(): Promise<Bookmark[]> {
    try {
      const response = await this.client.v2.bookmarks({
        expansions: ['author_id', 'attachments.media_keys'],
        'tweet.fields': ['created_at', 'public_metrics'],
        'user.fields': ['name', 'username', 'profile_image_url'],
        'media.fields': ['url', 'preview_image_url'],
        max_results: 100
      });

      if (!response.data) {
        return [];
      }

      const users = response.includes?.users || [];
      const media = response.includes?.media || [];

      return response.data.map(tweet => {
        const author = users.find(user => user.id === tweet.author_id);
        const tweetMedia = tweet.attachments?.media_keys?.map(key => 
          media.find(m => m.media_key === key)
        ).filter(Boolean)[0];

        return {
          id: tweet.id,
          tweetUrl: `https://twitter.com/${author?.username}/status/${tweet.id}`,
          author: {
            name: author?.name || 'Unknown',
            handle: `@${author?.username || 'unknown'}`,
            avatar: author?.profile_image_url || ''
          },
          content: tweet.text,
          timestamp: tweet.created_at || new Date().toISOString(),
          category: 'Tech', // Default category, can be customized later
          mediaUrl: tweetMedia?.url || tweetMedia?.preview_image_url,
          metrics: tweet.public_metrics ? {
            likes: tweet.public_metrics.like_count,
            retweets: tweet.public_metrics.retweet_count,
            replies: tweet.public_metrics.reply_count
          } : undefined
        };
      });
    } catch (error) {
      console.error('Twitter API request failed:', error);
      throw error;
    }
  }
}

export const twitterService = new TwitterService();