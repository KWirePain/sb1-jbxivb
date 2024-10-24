import React from 'react';
import { BookmarkList } from './components/BookmarkList';
import { useTwitterBookmarks } from './hooks/useTwitterBookmarks';
import { BookmarkIcon } from 'lucide-react';

function App() {
  const { bookmarks, isLoading, error } = useTwitterBookmarks();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2">
            <BookmarkIcon className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-900">Twitter Bookmarks</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BookmarkList
          bookmarks={bookmarks}
          isLoading={isLoading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;