import React from 'react';
import { Bookmark } from 'lucide-react';
import type { Tweet } from '../types';

interface BookmarkCardProps {
  tweet: Tweet;
}

export function BookmarkCard({ tweet }: BookmarkCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <img
          src={tweet.author.profileImageUrl}
          alt={tweet.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{tweet.author.name}</p>
              <p className="text-gray-500">@{tweet.author.username}</p>
            </div>
            <Bookmark className="w-5 h-5 text-blue-500" />
          </div>
          <p className="mt-2">{tweet.text}</p>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(tweet.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}