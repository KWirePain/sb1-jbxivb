import React from 'react';
import { Bookmark } from 'lucide-react';
import type { Tweet } from '../types';
import { BookmarkCard } from './BookmarkCard';

interface BookmarkListProps {
  bookmarks: Tweet[];
  isLoading: boolean;
  error: string | null;
}

export function BookmarkList({ bookmarks, isLoading, error }: BookmarkListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookmarks.map((tweet) => (
        <BookmarkCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}