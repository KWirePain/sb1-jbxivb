import { Bookmark, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Tech', icon: 'Laptop', color: 'blue' },
  { id: '2', name: 'Inspiration', icon: 'Lightbulb', color: 'yellow' },
  { id: '3', name: 'Reading', icon: 'BookOpen', color: 'emerald' },
  { id: '4', name: 'Design', icon: 'Palette', color: 'purple' },
];

export const bookmarks: Bookmark[] = [
  {
    id: '1',
    tweetUrl: 'https://twitter.com/dan_abramov/status/1234567890',
    author: {
      name: 'Dan Abramov',
      handle: '@dan_abramov',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop',
    },
    content: 'React 19 will change everything about how we think about rendering...',
    timestamp: '2024-03-15T10:00:00Z',
    category: 'Tech',
  },
  {
    id: '2',
    tweetUrl: 'https://twitter.com/addyosmani/status/1234567891',
    author: {
      name: 'Addy Osmani',
      handle: '@addyosmani',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
    },
    content: "Here's a thread on performance optimization techniques that will blow your mind...",
    timestamp: '2024-03-14T15:30:00Z',
    category: 'Tech',
    mediaUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    tweetUrl: 'https://twitter.com/sarah_edo/status/1234567892',
    author: {
      name: 'Sarah Drasner',
      handle: '@sarah_edo',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    },
    content: 'Just finished reading "Design Patterns in JS". Here are my key takeaways...',
    timestamp: '2024-03-13T09:15:00Z',
    category: 'Reading',
  },
];