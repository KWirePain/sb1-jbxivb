import React from 'react';
import { Bookmark as BookmarkIcon, Share } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold text-gray-900">TweetMarks</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Share className="w-4 h-4" />
            Share Collection
          </button>
        </div>
      </div>
    </header>
  );
}