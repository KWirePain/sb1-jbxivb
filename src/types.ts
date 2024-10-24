export interface Bookmark {
  id: string;
  tweetUrl: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  category: string;
  mediaUrl?: string;
  metrics?: {
    likes: number;
    retweets: number;
    replies: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface TwitterConfig {
  apiKey: string;
  apiSecret: string;
  accessToken: string;
  accessSecret: string;
  bearerToken: string;
}